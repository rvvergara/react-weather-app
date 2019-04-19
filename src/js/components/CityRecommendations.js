import React from 'react';

const CityRecommendations = (props) => {
  const {
    cities,
    handleCitySelect
  } = props;
  return (
    <div id="city-recommendations">
      {
        cities.map(city => (
          <div
            className="city-item"
            onClick={()=> handleCitySelect(city.title)}
            key={city.woeid}
          >
            {city.title}
          </div>
        )).slice(0, 16)
      }
    </div>
  )
};

export default CityRecommendations;