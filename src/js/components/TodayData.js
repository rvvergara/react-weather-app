import React from 'react';
import DataTable from './DataTable';
import TempSelector from './TempSelector';
import {
  tempToDisplay,
  parseDate,
} from '../helpers/dataHelpers';

const weatherImageUrl = 'https://www.metaweather.com/static/img/weather/png/'

const TodayData = (props) => {
  const {
    data,
    celsius,
    changeTempUnit
  } = props;

  console.log(props);
  const unitDisp = celsius ? 'C' : 'F';
  const temp = tempToDisplay(unitDisp, data.the_temp);
  return (
    <div>
      <h3>{parseDate(data.applicable_date, true)}</h3>
      <img
        src={`${weatherImageUrl}${data.weather_state_abbr}.png`} 
        alt="weather today"
        className="weather-img"
        />
        <TempSelector 
          celsius={celsius}
          changeTempUnit={changeTempUnit}
        />
        <h3>{Math.round(temp,0)}&deg;{unitDisp}</h3>
        <DataTable 
          data={data}
          celsius={celsius}
        />
    </div>
  )
};

export default TodayData;