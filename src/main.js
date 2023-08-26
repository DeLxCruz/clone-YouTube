const url = '../data/dataChannel.json';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '8daaabf2damshe677dfe21e759bfp1713a7jsnf88d97a4cb2d',
// 		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
// 	}
// };

const asyncFunction = async (url) => {

    const response = await fetch(url);
    const result = await response.text();
    console.log(result);

}

asyncFunction(url)