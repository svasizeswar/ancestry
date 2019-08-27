import React, {Component} from "react"
import axios from "axios";
import * as M from "../models/drupal"

class HomeDnaBlock extends Component {

	constructor(props) {
		super(props);
		this.state = {block_6: {}};
	}

	componentDidMount() {
		this.setState({block_6: M.getBlockDna()});
// 		axios({
// 			url: "http://devel.ravendevelopers.com/ancestry/graphql",
// 			method: 'post',
// 			data: {
// 				query: `
// query {
// blockContentById(id: "6"){
//     entityLabel
//     entityBundle
//     ...body
//   }
// }
//
// fragment body on BlockContentBasic{
//   body{
//     value
//   }
// }
// 				`
// 			}
// 		}).then((result) => {
// 			const data = result.data.data;
// 			this.setState({block_6: data});
// 		});
	}

	render() {
		let element = this.state.block_6;
		let blockContent = element.blockContentById.body.value.replace(/(<([^>]+)>)/ig,"");

		return (
			<div className="container block-6-container block-block " id="ancestry-dna-db">
				<div className="block-content"><p>{blockContent}</p>
				</div>
			</div>
		)
	}

}

export default HomeDnaBlock;

// export default () => (
// 	<div className="container block-6-container block-block " id="ancestry-dna-db">
// 		<div className="block-content"><p>Bringing together science and self-discovery, Ancestry helps everyone, everywhere discover the story of what led to them. Our sophisticated engineering and technology harnesses family history and consumer genomics, combining billions of rich historical records, millions of family trees, and samples from over 15 million people in the AncestryDNA database to provide people with deeply meaningful insights about who they are and where they come from.</p>
// 		</div>
// 	</div>
// )
