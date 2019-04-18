import React from 'react';
const weatherImageUrl = 'https://www.metaweather.com/static/img/weather/png/'

const TodayData = (props) => {
  const {
    data
  } = props;

  return (
    <div>
      <h3>Data for {new Date(data.applicable_date).toDateString()}</h3>
      <img
        src={`${weatherImageUrl}${data.weather_state_abbr}.png`} 
        alt="weather today"
        className="weather-img"
        />
        <h3>{data.the_temp}</h3>
    </div>
  )
};

export default TodayData;