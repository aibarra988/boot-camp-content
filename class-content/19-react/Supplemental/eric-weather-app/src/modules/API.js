import axios from 'axios'

const API = {
  getWeather(location){
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=166a433c57516f51dfab1f7edaed8413`
    return axios.get(url);
    // return Promise.resolve({
    //   data: {
    //     main: {
    //       temp: 95.5
    //     }
    //   }
    // })
  }
}

export default API;
