import React from 'react';
import Header from './Header';
import SearchForm from './SearchForm';
import CityRecommendations from './CityRecommendations';
import Loading from './Loading';
import Error from './Error';
import DailyData from './DailyData';
import {getWeatherData, listCities} from '../helpers/api';

class WeatherApp extends React.Component {
  state = {
    celsius: true,
    searchTerm: '',
    weatherDataArr: [],
    fetchingCity: false,
    fetchingWeatherData: false,
    cities: [],
    city: null,
    cityError: null,
    dataError: null,
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
  changeTempUnit = () => {
    this.setState((prevState)=>({
      celsius: !prevState.celsius
    }))
  }
  loadCities = data => {
    if(data){
      this.setState(()=>({
        fetchingCity: false,
        cities: data,
        cityError: null,
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
      <Header />
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
        <DailyData
          celsius={this.state.celsius}
          city={this.state.city}
          weatherDataArr={this.state.weatherDataArr}
          changeTempUnit={this.changeTempUnit}
        />
      </div>
    </div>);
  }
}

export default WeatherApp;