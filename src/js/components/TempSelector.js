import React from 'react';

const TempSelector = (props) => {
  const {
    celsius,
    changeTempUnit,
  } = props;
  return (
    <div id="temp-select">
      <div className="radio">
        <input 
          className="form-check-input" 
          type="radio" 
          name="temp"
          id="celsius" 
          checked={celsius} 
          value="C"
          onChange={changeTempUnit} 
          />C
      </div>
      <div className="radio">
        <input 
          className="form-check-input"
          type="radio" 
          name="temp" 
          id="fahrenheit" 
          checked={!celsius} 
          value="F"
          onChange={changeTempUnit}
        />F
      </div>
    </div>
  )
};

export default TempSelector;