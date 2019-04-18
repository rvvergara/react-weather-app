import React from 'react';
import TodayData from './TodayData';
class DataTable extends React.Component {
  state = {
    unit: 'C',
  }
  render(){
    const {
      city,
      weatherDataArr,
    } = this.props;
    return (
      city && <div className="row animate">
        <h1>{city}</h1>
        <TodayData 
          data={weatherDataArr[0]}
        />
      </div>
    )
  }
}

export default DataTable;