import React, { useState } from 'react';
import axios from 'axios';
require('regenerator-runtime/runtime');

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
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants/search?token=${apiKey}&q=${searchTerm}`
    );
    setPlants(response.data);
    console.log(plants);
  };

  function handleClick(e) {
    e.preventDefault();
    console.log(plants);
  }

  return (
    <form>
      <input type="text" name="searchTerm" onChange={handleOnChange} />
      <button onClick={fetchData}> SUBMIT</button>
      <button onClick={handleClick}>TEST</button>
    </form>
  );
}

export default SearchBarInput;
