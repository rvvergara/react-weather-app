import React from 'react';
import SearchForm from './SearchForm';
import getWeatherData from '../helpers/api';

class WeatherApp extends React.Component {
  state = {
    searchTerm: '',
    weatherDataArr: [],
    city: '',
  }
  handleChange = (key, value) => this.setState(()=>({
    [key]: value,
  }));
  handleSubmit = (term) => {
    const weatherData = getWeatherData(term);
    weatherData.then(data => this.setWeatherData(data));
  }
  setWeatherData = (data) => this.setState(() => ({
    weatherDataArr: data.consolidated_weather, 
    searchTerm: '',
    city: data.title,
  }));
  render(){
    return (<div>
      <h1>Weather App</h1>
      <div className="container">
        <SearchForm 
          searchTerm={this.state.searchTerm}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    </div>);
  }
}

export default WeatherApp;