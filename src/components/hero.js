import React, {Component} from "react"
import { useStaticQuery, graphql } from "gatsby"
import axios from "axios"

class HomeJumbotron extends Component {

  constructor(props) {
    super(props);
  }

	componentDidMount() {
	};

	static textTruncate (str, length, ending) {
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
		const divStyle = {
			backgroundImage: 'url(http://dev-ancestry.pantheonsite.io/sites/default/files/styles/jumbotron_one_column/public/sarah_booth.jpg?itok=q2PDEcM7)',
		};

		// let element = this.state.hero.nodeById;
		// let subhead = HomeJumbotron.textTruncate(element.body.processed.replace(/(<([^>]+)>)/ig,""), 250);

		return(
			<div className="jumbotron">

				<div className='container-default views-home-blogs-hero-section-block-container block-views jumbotron-generic one-cols-jumbotron' id='home-jumbotron' style={divStyle}>

					<div className="view view-home-blogs-hero-section view-id-home_blogs_hero_section view-display-id-block view-dom-id-fed2853a10e673ce5bfd2046bf8a4790">

						<div className="view-content row in-view">
							<div className="views-row views-row-1 node-90">
								<h2><a href="#" onClick={e => e.preventDefault()}>Understanding your new ethnicity estimate</a></h2>
								<p>We’re always looking for new ways to help support our customers on their journeys of personal discovery. Often that means updating our products and services to take advantage of the most advanced science and technology.</p>
								<a className="btn btn-outline-ancestry btn-lg" href="#" onClick={e => e.preventDefault()}>Read This Post</a></div>
						</div>


					</div>

				</div>
			</div>
		)
	}

}

export default HomeJumbotron;
