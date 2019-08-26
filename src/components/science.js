import React, {Component} from "react"
import axios from "axios";

class HomeScienceBlock extends Component {

	constructor(props) {
		super(props);
		this.state = {blocks: {}};
	}

	componentDidMount() {
		axios({
			url: "http://devel.ravendevelopers.com/ancestry/graphql",
			method: 'post',
			data: {
				query: `
query {
blockContentById(id: "5"){
    entityLabel
    entityBundle
    ...body
  }
}

fragment body on BlockContentBasic{
  body{
    value
  }
}
				`
			}
		}).then((result) => {
			const data = result.data.data;
			this.setState({blocks: data});
		});
	}

	render(){
		let element = this.state.blocks;

		let blockContent = element.blockContentById.body.value.replace(/(<([^>]+)>)/ig,"");

		return (
			<div className="container-default block-5-container block-block " id="ancestry-science-tech">
				<div className="block-content">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-24 col-lg-18 col-md-20">
								<h3>{blockContent}</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

}

export default HomeScienceBlock;
