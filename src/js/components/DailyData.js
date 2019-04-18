import React from 'react';
import TodayData from './TodayData';

export const DailyData = (props) => {
  const {
    celsius,
    city,
    weatherDataArr,
    changeTempUnit
  } = props;
  return (
    city && <div className="row animate">
      <h1>{city}</h1>
      <TodayData 
        data={weatherDataArr[0]}
        celsius={celsius}
        changeTempUnit={changeTempUnit}
      />
    </div>
  )
}

export default DailyData;