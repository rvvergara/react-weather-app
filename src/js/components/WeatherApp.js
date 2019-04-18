import React from 'react';
import SearchForm from './SearchForm';
import CityRecommendations from './CityRecommendations';
import Loading from './Loading';
import Error from './Error';
import DataTable from './DataTable';
import {getWeatherData, listCities} from '../helpers/api';

class WeatherApp extends React.Component {
  state = {
    searchTerm: '',
    weatherDataArr: [],
    fetchingCity: false,
    fetchingWeatherData: false,
    cities: [],
    city: null,
    cityError: null,
    dataError: null
  }
  handleChange = async (key, value) =>{
      this.setState(() => ({[key]: value,
        fetchingCity: true, dataError: null}));
      const cities = await listCities(value);
      this.loadCities(cities);
   };
  handleCitySelect = (cityName) => {
    this.handleSubmit(cityName);
    this.setState(()=>({
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
        cityError: null,
        weatherDataArr: [],
      }))
    }else{
      this.setState(()=>({
        cities: [],
        cityError: "Can't find what you're looking for"
      }))
    }
  }
  handleSubmit = async (term) => {
    this.setState(()=>({fetchingWeatherData: true, cities: [], city: null}));
    const weatherData = await getWeatherData(term)
    this.setWeatherData(weatherData);
  }
  setWeatherData = (data) => {
    if(data){
      this.setState(() => ({
        weatherDataArr: data.consolidated_weather, 
        searchTerm: '',
        city: data.title,
        fetchingWeatherData: false,
      }));
    }else{
      this.setState(()=>(
        {
          searchTerm: '', 
          dataError: "City not found",
          cities: [],
          fetchingWeatherData: false,
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
        <Error 
          dataError={this.state.dataError}
        />
        <DataTable 
          city={this.state.city}
        />
      </div>
    </div>);
  }
}

export default WeatherApp;