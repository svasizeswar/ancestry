const axios = require('axios');
const crypto = require('crypto');


exports.sourceNodes = async ({actions}) => {
	const {createNode} = actions;
	const result = await axios({
		method: "POST",
		// url: "http://dev-ancestry.pantheonsite.io/graphql",
		url: "http://devel.ravendevelopers.com/ancestry/graphql",
		data: {
			query: `
query {
  nodeById(id: "90") {
    entityId
    entityCreated

    title
    status

    ... on NodeBlog {
      fieldBlogPostUrl
      fieldBlogPostAuthor
      fieldFeatured
      fieldCategory {
        targetId
      }
      fieldBlogPhoto {
        targetId
        alt
        title
        width
        height
        url
      }
    }
  }
}
			`
		}
	});
	for (const ancestrynode of result.data.data.node) {
		await createNode({
			children: [],
			id: ancestrynode.nid.toString(),
			title: ancestrynode.title,
			body: {
				value: ancestrynode.body.value,
				summary: ancestrynode.body.summary,
				format: ancestrynode.body.format
			},
			field_featured: {value: ancestrynode.field_featured.value},
			field_category: {tid: ancestrynode.field_category.tid},
			parent: null,
			internal: {
				type: 'ancestrynode',
				contentDigest: crypto
					.createHash(`md5`)
					.update(JSON.stringify(ancestrynode))
					.digest(`hex`),
			},
		});
	}
};
