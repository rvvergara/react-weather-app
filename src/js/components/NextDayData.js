import React from 'react';
import DataTable from './DataTable';
import {
  tempToDisplay,
  parseDate,
} from '../helpers/dataHelpers';

const weatherImageUrl = 'https://www.metaweather.com/static/img/weather/png/';

const NextDayData = (props) => {
  const {
    data,
    celsius,
  } = props;
  const unitDisp = celsius ? 'C' : 'F';
  const temp = tempToDisplay(unitDisp, data.the_temp);
  return (
    <div className="next">
      <h4>{parseDate(data.applicable_date, false)}</h4>
      <div className="weather-img-temp">
        <img 
          src={`${weatherImageUrl}${data.weather_state_abbr}.png`}
          alt="another day data"
          className="weather-img"
        />
        <h4>{temp}&deg;{unitDisp}</h4>
      </div>
      <div className="next-days-table">
        <DataTable 
          data={data}
          celsius={celsius}
        />
      </div>
    </div>
  )
};

export default NextDayData;