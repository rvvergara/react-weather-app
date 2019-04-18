import React from 'react';

const Loading = (props) => {
  const {
    fetchingWeatherData
  } = props;
  return (
    fetchingWeatherData && <div id="loading">
      Fetching data...
    </div>
  )
}

export default Loading;