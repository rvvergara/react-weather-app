import React from 'react';
import {
  tempToDisplay,
} from '../helpers/dataHelpers';

const DataTable = (props) => {
  const {
    data,
    celsius,
  } = props;
  const {
    max_temp,
    min_temp,
    humidity,
  } = data;
  const unitDisp = celsius ? 'C' : 'F';
  return (
    <ul>
      <li><b>Max Temp:</b> {tempToDisplay(unitDisp, max_temp)}&deg;{unitDisp}</li>
      <li><b>Min Temp:</b> {tempToDisplay(unitDisp, min_temp)}&deg;{unitDisp}</li>
      <li><b>Humidity: </b>{humidity}%</li>
    </ul>
  )
};

export default DataTable;