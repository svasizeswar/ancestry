import React, {Component} from "react"
//import { useStaticQuery, graphql } from "gatsby"

import axios from "axios"


class FeaturedStory extends Component {
	state = {
		title1: " ",
		title2: " "
	};

	componentDidMount() {
		axios({
			url: "http://devel.ravendevelopers.com/ancestry/graphql",
			method: 'post',
			data: {
				query: `
					query {
					  nodeById(id: "88") {
						entityId
						entityCreated
						title
						status
					  }
					}	`
			}
		}).then((result) => {
			//console.log(result);
			const blocktitle = result.data.data.nodeById.title;
			this.setState({title1: blocktitle})
		});
		axios({
			url: "http://devel.ravendevelopers.com/ancestry/graphql",
			method: 'post',
			data: {
				query: `
					query {
					  nodeById(id: "89") {
						entityId
						entityCreated
						title
						status
					  }
					}	`
			}
		}).then((result) => {
			//console.log(result);
			const blocktitle = result.data.data.nodeById.title;
			this.setState({title2: blocktitle})
		});


	}

	render() {
		return (
			<div class="container views-home-featured-story-block-container block-views " id="home-featured-stories">
				<div class="view view-home-featured-story view-id-home_featured_story view-display-id-block view-article-wrapper view-dom-id-e3ee66df1d39f6396ad06479b404c440">
					<div class="view-content">
						<ul class="article-list article-list-blue content-overlay list-unstyled row">
							<li class="views-row views-row-1 views-row-odd views-row-first col-24 col-md-12 node-88 in-view">
								<div class="encapsulated">
									<img typeof="foaf:Image" src="http://dev-ancestry.pantheonsite.io/sites/default/files/styles/medium/public/Sarah_Booth_1.jpg?itok=kqqzWfKU" width="600" height="600" alt="" class="medium img-fluid"></img>
									<div class="story-content">
										<h3><a href="/content/sarah-booth-four-year-ancestry-member">{this.state.title2}</a></h3>
									</div>
								</div>
							</li>
							<li class="views-row views-row-2 views-row-even views-row-last col-24 col-md-12 node-89 in-view">
								<div class="encapsulated">
									<img typeof="foaf:Image" src="http://dev-ancestry.pantheonsite.io/sites/default/files/styles/medium/public/jason_jones_1.jpg?itok=8z--j9_w" width="600" height="600" alt="" class="medium img-fluid"></img>
									<div class="story-content">
										<h3><a href="/content/jason-jones-ancestral-voyage-trip-great-britain-and-ireland">{this.state.title1}</a></h3>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<footer class="view-footer">
						<p class="h4">We’ve pioneered and defined this category, developing new innovations and technologies that have reinvented how people make family history discoveries. And these discoveries can give everyone a greater sense of identity, relatedness, and their place in the world.</p>
						<a class="btn btn-outline-ancestry btn-blue btn-lg" href="#">View Our Full Story</a>
					</footer>
				</div>
			</div>)
	}
}

export default FeaturedStory
