import React, {Component} from "react"
import { useStaticQuery, graphql } from "gatsby"
import axios from "axios";

class HomeJumbotron extends Component {

  constructor(props) {
    super(props);
    this.state = {hero: {}};
  }

	componentDidMount() {
		axios({
			url: "http://devel.ravendevelopers.com/ancestry/graphql",
			method: 'post',
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
		}).then((result) => {
			const data = result.data.data;
			this.setState({hero: data});
		});

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

		const element = this.state.hero.nodeById;
		let subhead = element.body.processed.replace(/(<([^>]+)>)/ig,"");

		subhead = HomeJumbotron.textTruncate(subhead, 250);

		return(
			<div className="jumbotron">

				<div className='container-default views-home-blogs-hero-section-block-container block-views jumbotron-generic one-cols-jumbotron' id='home-jumbotron' style={divStyle}>

					<div className="view view-home-blogs-hero-section view-id-home_blogs_hero_section view-display-id-block view-dom-id-fed2853a10e673ce5bfd2046bf8a4790">

						<div className="view-content row in-view">
							<div className="views-row views-row-1 node-90">

								<h2><a href="javascript:void(0)">{element.title}</a></h2>
								<p>{subhead}</p>

								<a className="btn btn-outline-ancestry btn-lg" href="javascript:void(0)">Read This Post</a></div>
						</div>


					</div>

				</div>
			</div>
		)
	}

}

export default HomeJumbotron;
