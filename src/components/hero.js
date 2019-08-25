import React, {Component} from "react"
import { useStaticQuery, graphql } from "gatsby"

class HomeJumbotron extends Component {

  constructor(props) {
    super(props);
  }

	render() {
		const divStyle = {
			backgroundImage: 'url(http://dev-ancestry.pantheonsite.io/sites/default/files/styles/jumbotron_one_column/public/sarah_booth.jpg?itok=q2PDEcM7)',
		};
		return(
			<div className="jumbotron">

				<div className='container-default views-home-blogs-hero-section-block-container block-views jumbotron-generic one-cols-jumbotron' id='home-jumbotron' style={divStyle}>

					<div className="view view-home-blogs-hero-section view-id-home_blogs_hero_section view-display-id-block view-dom-id-fed2853a10e673ce5bfd2046bf8a4790">

						<div className="view-content row in-view">
							<div className="views-row views-row-1 node-90">

								<h2><a href="/content/understanding-your-new-ethnicity-estimate" rel="external" target="_blank">Understanding your new ethnicity estimate</a></h2>
								<p>We’re always looking for new ways to help support our customers on their journeys of personal discovery. Often that means updating our products and services to take advantage of the most advanced science and technology.</p>

								<a className="btn btn-outline-ancestry btn-lg" href="/content/understanding-your-new-ethnicity-estimate" rel="external" target="_blank">Read This Post</a></div>
						</div>


					</div>

				</div>
			</div>
		)
	}

}

export default HomeJumbotron;
