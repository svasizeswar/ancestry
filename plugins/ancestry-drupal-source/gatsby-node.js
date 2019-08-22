const axios = require('axios');
const crypto = require('crypto');




exports.sourceNodes = async ({actions}) => {
  const {createNode} = actions;
  const result = await axios({
                    method: "POST",
                    url: "http://dev-ancestry.pantheonsite.io/graphql",
                    data: {
                        query: `
											query BlogWithAuthorAndTags($nid: String) {
						  node(nid: $nid) {
							nid
							title
							body {
							  value
							  summary
							  format
							}
							field_featured {
							  value
							}
							field_blog_photo {
							  fid
							  alt
							  title
							  width
							  height
							}
							field_blog_post_url {
							  value
							  format
							}
							field_blog_post_url {
							  value
							  format
							}
							field_category {
							  tid
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
	  body:{value: ancestrynode.body.value,
			summary: ancestrynode.body.summary,
			format: ancestrynode.body.format},
	  field_featured:{value:ancestrynode.field_featured.value},
	  field_category:{tid:ancestrynode.field_category.tid},
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
