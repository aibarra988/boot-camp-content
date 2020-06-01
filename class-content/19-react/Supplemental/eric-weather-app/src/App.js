import React, { Component } from 'react';
import Weather from "./components/Weather"
import API from "./modules/API"
class App extends Component {
  state = {
    weather: null
  }
  // componentDidMount(){
  //   this.loadWeather();
  // }
  loadWeather = () => {
    API.getWeather("Austin").then(response => {
      console.log(response)
      this.setState({weather: response.data})
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Austin, Texas</h1>
        <Weather weather={this.state.weather} refresh={this.loadWeather}/>
      </div>
    );
  }
}

export default App;
