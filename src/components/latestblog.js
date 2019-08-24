import React, {Component} from "react"
import axios from "axios";

class HomeFeaturedBlogArticles extends Component {

  constructor(props) {
    super(props);
    this.state = {blogs: {}};
  }

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

		//console.log(result.data.data);

		return result.data.data;
	}

	componentDidMount() {
		axios({
			url: "http://devel.ravendevelopers.com/ancestry/graphql",
			method: 'post',
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
		}).then((result) => {
			const data = result.data.data;
			this.setState({blogs: data});
		});

	};

	textTruncate = function (str, length, ending) {
		if (length == null) {
			length = 100;
		}
		if (ending == null) {
			ending = '...';
		}
		if (str.length > length) {
			return str.substring(0, length - ending.length) + ending;
		} else {
			return str;
		}
	};

	render() {
		const elements = [];

		for (const key in this.state.blogs) {
			// check also if property is not inherited from prototype
			if (this.state.blogs.hasOwnProperty(key)) {
				const value = this.state.blogs[key];
				switch (value.fieldBlogPhoto.targetId){
					case 55:
						value.featuredPhoto = 'http://dev-ancestry.pantheonsite.io/sites/default/files/styles/medium/public/FULL-Tuscany.jpg?itok=Hf5ak1yg';
						break;
					case 57:
						value.featuredPhoto = 'http://dev-ancestry.pantheonsite.io/sites/default/files/styles/medium/public/adam-zvanovec-34686_0.jpg?itok=a7OWxa_Y';
						break;
				}
				value.body.processed = value.body.processed.replace(/(<([^>]+)>)/ig,"");
				value.body.processed = this.textTruncate(value.body.processed, 150);
				elements.push(value);
			}
		}

		return (
			<div className="container views-home-featured-blogs-block-container block-views " id="">
				<div className="view view-home-featured-blogs view-id-home_featured_blogs view-display-id-block archive-blogs view-article-wrapper mt-nth3 view-dom-id-33daa44a3d3dd8d90398ce3c875ff549">
					<div className="view-content">
						<ul className="article-list content-overlay list-unstyled row">

							{elements.map((value, index) => {
								return (
									<li className="views-row views-row-{index} views-row-odd views-row-first col-24 col-md-12 node-86 in-view" key={index}>
										<article>
											<img typeof="foaf:Image" src={value.featuredPhoto} width="600" height="600" alt="" className="medium img-fluid"></img>
											<div className="blog-content">
												<header className="article-title trim-two-liner">
													<h3><a href="/">{value.title}</a></h3>
												</header>
												<section>
													<p>{value.body.processed}</p>
												</section>
												<footer>
													<p className="meta-info">
														<a className="comments" href="javascript:void(0)" rel="external">0 Comments</a>&nbsp;&nbsp;
														<a className="read-more" href="javascript:void(0)" rel="external"><strong>Read More&nbsp;&nbsp;&gt;</strong></a>
													</p>
												</footer>
											</div>
										</article>
									</li>
								);
							})}

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
