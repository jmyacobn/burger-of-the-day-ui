import './SearchBar.css';

const SearchBar = ( {handleChange} ) => {
  return (
    <form>
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