import React from 'react';
import DataTable from './DataTable';
import TempSelector from './TempSelector';
import {
  tempToDisplay,
  parseDate,
} from '../helpers/dataHelpers';

const weatherImageUrl = 'https://www.metaweather.com/static/img/weather/png/';

const TodayData = (props) => {
  const {
    data,
    celsius,
    city,
    changeTempUnit
  } = props;

  const unitDisp = celsius ? 'C' : 'F';
  const temp = tempToDisplay(unitDisp, data.the_temp);
  return (
    <div id="today-data">
      <div id="today-data-main">
        <h1>{city}</h1>
        <p>{parseDate(data.applicable_date, true)}</p>
        <div className="weather-img-temp">
          <img
            src={`${weatherImageUrl}${data.weather_state_abbr}.png`} 
            alt="weather today"
            className="weather-img"
            />
            <div id="temp-display">
              <TempSelector 
                celsius={celsius}
                changeTempUnit={changeTempUnit}
              />
              <h3>{temp}&deg;{unitDisp}</h3>
            </div>
        </div>
      </div>
        <div id="today-data-table">
          <DataTable 
            data={data}
            celsius={celsius}
          />
        </div>
    </div>
  )
};

export default TodayData;