import axios from "axios"

export async function getBlockScience() {
	await axios({
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
		return result.data.data;
	});
}

export async function getBlockDna() {
	await axios({
		url: "http://devel.ravendevelopers.com/ancestry/graphql",
		method: 'post',
		data: {
			query: `
query {
blockContentById(id: "6"){
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
		return result.data.data;
	});
}
