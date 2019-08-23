import React, {Component} from "react"
//import axios from "axios"
//const axios = require('axios');
//import { graphql } from "gatsby"

class HomeFeaturedBlogArticles extends Component {

	state = {
		blogs: []
	};

	static async getBlogArticles() {
		const axios = require('axios');
		const result = await axios({
			method: "POST",
			url: "http://devel.ravendevelopers.com/ancestry/graphql",
			data: {
				query: `
query {
  nodeOne: nodeById(id: "86") {
    ... blogFragment
  }
  nodeTwo: nodeById(id: "81") {
    ... blogFragment
  }
}

fragment blogFragment on NodeBlog {
  title
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
			`
			}
		});

		return result;
	}

	componentDidMount() {
		this.setState({blogs: HomeFeaturedBlogArticles.getBlogArticles()});
	};

	render() {
		console.log(this.state.blogs);

		// for (const blog of this.state.blogs) {
		// 	console.log(blog);
		// }

		return (
			<div className="container views-home-featured-blogs-block-container block-views " id="">
				<div className="view view-home-featured-blogs view-id-home_featured_blogs view-display-id-block archive-blogs view-article-wrapper mt-nth3 view-dom-id-33daa44a3d3dd8d90398ce3c875ff549">
					<div className="view-content">
						<ul className="article-list content-overlay list-unstyled row">
							<li className="views-row views-row-1 views-row-odd views-row-first col-24 col-md-12 node-86 in-view">
								<article>
									<img typeof="foaf:Image" src="http://dev-ancestry.pantheonsite.io/sites/default/files/styles/medium/public/FULL-Tuscany.jpg?itok=Hf5ak1yg" width="600" height="600" alt="" className="medium img-fluid"></img>
									<div className="blog-content">
										<header className="article-title trim-two-liner">
											<h3><a href="/content/insights-culture-and-events-ancestry">Insights on Culture and Events at Ancestry</a></h3>
										</header>
										<section>
											<p>Ancestry recently announced the creation of a Tech and Product User Group in Utah with the goal of encouraging collaboration between companies across...</p>
										</section>
										<footer>
											<p className="meta-info"><a className="comments" href="/content/insights-culture-and-events-ancestry#disqus_thread" rel="external" target="_blank">0 Comments</a>&nbsp;&nbsp;<a className="read-more" href="/content/insights-culture-and-events-ancestry" rel="external" target="_blank"><strong>Read More&nbsp;&nbsp;&gt;</strong></a></p>
										</footer>
									</div>
								</article>
							</li>
							<li className="views-row views-row-2 views-row-even views-row-last col-24 col-md-12 node-81 in-view">
								<article>
									<img typeof="foaf:Image" src="http://dev-ancestry.pantheonsite.io/sites/default/files/styles/medium/public/adam-zvanovec-34686_0.jpg?itok=a7OWxa_Y" width="600" height="600" alt="" className="medium img-fluid"></img>
									<div className="blog-content">
										<header className="article-title trim-two-liner">
											<h3><a href="/content/ancestry-women-technology-year-review">Ancestry Women in Technology year in review</a></h3>
										</header>
										<section>
											<p>Ancestry recently announced the creation of a Tech and Product User Group in Utah with the goal of encouraging collaboration between companies across...</p>
										</section>
										<footer>
											<p className="meta-info"><a className="comments" href="/content/ancestry-women-technology-year-review#disqus_thread" rel="external" target="_blank">0 Comments</a>&nbsp;&nbsp;<a className="read-more" href="/content/ancestry-women-technology-year-review" rel="external" target="_blank"><strong>Read More&nbsp;&nbsp;&gt;</strong></a></p>
										</footer>
									</div>
								</article>
							</li>
						</ul>
					</div>
					<footer className="view-footer">
						<a className="btn btn-outline-ancestry btn-green btn-lg" href="#">View Blog</a>
					</footer>
				</div>
			</div>
		)
	}
}

export default HomeFeaturedBlogArticles;
