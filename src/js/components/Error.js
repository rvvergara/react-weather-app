import React from 'react';

const Error = (props) => {
  const {
    dataError
  } = props;
  return (
    dataError && <div id="error">
      {dataError}
    </div>
  )
}

export default Error;