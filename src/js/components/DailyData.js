import React from 'react';
import TodayData from './TodayData';
import NextDayData from './NextDayData';

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
      {
        weatherDataArr.slice(1,5).map(data => (
          <NextDayData
            key={data.id}
            data={data}
            celsius={celsius} 
          />
        ))
      }
    </div>
  )
}

export default DailyData;