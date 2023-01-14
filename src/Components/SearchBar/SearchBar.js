import PropTypes from 'prop-types';
import './SearchBar.css';

const SearchBar = ( {handleChange} ) => {
  return (
    <form onSubmit={event => event.preventDefault() }>
      <input 
        aria-label='search-input' 
        type='search' 
        placeholder='Search by ingredient...' 
        onChange={ (event) => handleChange(event) }>
      </input>
    </form>
  )
}

export default SearchBar;

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired
}