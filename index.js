const axios = require('axios')


function fetchDataWithPromise() {
    let API_URL = "https://jsonplaceholder.typicode.com/posts";
    axios.get(API_URL)
        .then(response => response.data)
        .then((data) => {
            // console.log("data : ",data);
            return data;
        })
        .then(data => {
            return data.filter(item => item.userId == 9)
        })
        .then(filterData => console.log("Filter Data : ", filterData))
        .catch(error => console.error("error :", error));
}

function fetchWeatherData(city) {
    try {
        const api_key = '4729015e71ca477ba48150347240506';
        const api_url = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`

        return axios.get(api_url)
            .then(res => res.data)
            .then(data => data)
        // .catch(err => console.log(err.message))

        // return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const data = Promise.all([
    fetchWeatherData('mumbai'),
    fetchWeatherData('delhi'),
    fetchWeatherData('bihar'),
    fetchWeatherData('madhubani'),
]).then(result => {
    console.log(`result data : ${result}`)
    return result;
})
    .catch(err => console.log(`Error in result : ${err}`))

console.log("result :", data.then(data => data));
// fetchDataWithPromise();