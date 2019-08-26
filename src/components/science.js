import React, {Component} from "react"
import HomeFeaturedBlogArticles from "./latestblog";

class HomeScienceBlock extends Component {

	constructor(props) {
		super(props);
		this.state = {blogs: {}};
	}

	componentDidMount() {

	}

	render(){
		return (
			<div className="container-default block-5-container block-block " id="ancestry-science-tech">
				<div className="block-content">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-24 col-lg-18 col-md-20">
								<h3>We’re a science and technology company with a very human mission</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

}

export default HomeScienceBlock;

// export default () => (
// 	<div className="container-default block-5-container block-block " id="ancestry-science-tech">
// 		<div className="block-content">
// 			<div className="container">
// 				<div className="row justify-content-center">
// 					<div className="col-24 col-lg-18 col-md-20">
// 						<h3>We’re a science and technology company with a very human mission</h3>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// )
