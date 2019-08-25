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
      body{
        processed
      }
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

	const ancestryNode = result.data.data.nodeById;

	await createNode({
		children: [],
		id: ancestryNode.entityId.toString(),
		title: ancestryNode.title,
		status: ancestryNode.status,
		body: ancestryNode.body.processed,
		fieldFeatured: ancestryNode.fieldFeatured,
		fieldCategory: ancestryNode.fieldCategory,
		fieldBlogPhoto: 'http://devel.ravendevelopers.com/ancestry/sites/default/files/sarah_booth.jpg',
		parent: null,
		internal: {
			type: 'ancestrynode',
			contentDigest: crypto
				.createHash(`md5`)
				.update(JSON.stringify(ancestryNode))
				.digest(`hex`),
		},
	});
};
