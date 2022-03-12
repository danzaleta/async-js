console.log(`//* Consulting Rick & Morty's API with ~ASYNC AWAIT~ *//
`);

const fetchData = require('./utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const executeRequest = async(url)=>{
    try {
        const data1 = await fetchData(url);
        const data2 = await fetchData(`${url}${data1.results[0].id}`);
        const data3 = await fetchData(data2.origin.url);

        console.log(data1.info.count);
        console.log(data2.name);
        console.log(data3.dimension);

    } catch (error) {
        console.log(error);
    }
}

executeRequest(API);