import React, { useState } from 'react';
import axios from 'axios';
require('regenerator-runtime/runtime');
import SearchResults from './SearchResults';
//import './Login.scss';
const apiKey = 'PM3BHHsn1BYggmzwVudKgtHVtS5yD-szFUEvt-VQ06I';

function SearchBarInput() {
  const [searchTerm, setSearchTerm] = useState();
  const [plants, setPlants] = useState([]);

  //Updates state to whatever is entered into our search bar
  function handleOnChange(e) {
    e.preventDefault();
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  }
  //sends the fetch request to API
  const fetchData = async (e) => {
    e.preventDefault();
    console.log(searchTerm);
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants/search?token=${apiKey}&q=${searchTerm}`
    );
    console.log(response.data.data);
    setPlants(response.data.data);
  };

  function plantClickHandle(e) {
    console.log(e);
  }

  //FUNCTION BELOW IS ONLY USED IN TESTING DIFFERENT CONSOLE LOGS. COINCIDES WITH LINE 45
  // function handleClick(e) {
  //   e.preventDefault();
  //   console.log(plants);
  //   console.log(Array.isArray(plants));
  // }

  return (
    <div>
      <form>
        <input type="text" name="searchTerm" onChange={handleOnChange} />
        <button onClick={fetchData}> Submit</button>
        {/* <button onClick={handleClick}>TEST</button> */}
      </form>
      {plants.length > 0 && (
        <SearchResults plantClickHandle={plantClickHandle} plants={plants} />
      )}
    </div>
  );
}

export default SearchBarInput;
