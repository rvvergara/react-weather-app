import React from 'react';
import SearchForm from './SearchForm';
import CityRecommendations from './CityRecommendations';
import Loading from './Loading';
import {getWeatherData, listCities} from '../helpers/api';

class WeatherApp extends React.Component {
  state = {
    searchTerm: '',
    weatherDataArr: [],
    fetchingCity: false,
    fetchingWeatherData: false,
    cities: [],
    city: '',
    error: '',
  }
  handleChange = async (key, value) =>{
      this.setState(() => ({[key]: value,
        fetchingCity: true}));
      const cities = await listCities(value);
      this.loadCities(cities);
   };
  handleCitySelect = (cityName) => {
    this.handleSubmit(cityName);
    this.setState(()=>({
      city: cityName,
      fetchingCity: false,
      searchTerm: cityName,
      cities: [],
    }));
  }
  loadCities = data => {
    if(data){
      this.setState(()=>({
        fetchingCity: false,
        cities: data,
        error: null,
        weatherDataArr: [],
      }))
    }else{
      this.setState(()=>({
        cities: [],
        error: "Can't find what you're looking for"
      }))
    }
  }
  handleSubmit = async (term) => {
    this.setState(()=>({fetchingWeatherData: true}));
    const weatherData = await getWeatherData(term)
    this.setWeatherData(weatherData);
  }
  setWeatherData = (data) => {
    if(data){
      this.setState(() => ({
        weatherDataArr: data.consolidated_weather, 
        searchTerm: '',
        city: data.title,
        cities: [],
        fetchingWeatherData: false,
      }));
    }else{
      this.setState(()=>(
        {
          searchTerm: '', 
          error: "City not found",
          cities: [],
        }
      ))
    }
  };
  render(){
    return (<div>
      <h1>Weather App</h1>
      <div className="container">
        <SearchForm 
          searchTerm={this.state.searchTerm}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <CityRecommendations 
          cities={this.state.cities}
          handleCitySelect={this.handleCitySelect} 
        />
        <Loading 
          fetchingWeatherData={this.state.fetchingWeatherData}
        />
      </div>
    </div>);
  }
}

export default WeatherApp;