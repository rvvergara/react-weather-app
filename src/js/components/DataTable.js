import React from 'react';

class DataTable extends React.Component {
  state = {
    unit: 'C',
  }
  render(){
    const {
      city
    } = this.props;
    return (
      city && <div className="row animate">
        Data Display Here for {city}
      </div>
    )
  }
}

export default DataTable;