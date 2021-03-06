import React from 'react';

const SearchForm = (props) => {
  const {
    searchTerm,
    handleChange,
    handleSubmit,
  } = props;
  return (
    <form
      onSubmit={e => {
          e.preventDefault();
          handleSubmit(e.target.elements[0].value);
          e.target.elements[0].value = '';
        }
      }
    >
     <div className="form-elements">
        <input
          placeholder="Search for your city"
          name="searchTerm"
          value={searchTerm}
          onChange={(e)=> handleChange(e.target.name, e.target.value)}
        />
        <button>Fetch Weather</button>
     </div>
    </form>
  )
}

export default SearchForm;