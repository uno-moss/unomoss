import React, { useState } from 'react';
// import axios from 'axios';

function SearchBarInput() {
  const [searchTerm, setSearchTerm] = useState();
  const [plants, setPlants] = useState([]);

  // const { register, handleSubmit, watch, errors } = useForm();
  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  function handleOnChange(e) {
    e.preventDefault();
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  }

  function handleClick(e) {
    e.preventDefault();
    console.log(searchTerm);
  }

  function searchAPI(e) {}

  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <input type="text" ref={register({ required: true })} />
    //   <button type="submit" ref={register({ required: true })}>
    //     Submit
    //   </button>
    // </form>

    <form>
      <input
        type="text"
        name="searchTerm"
        // value={searchTerm}
        onChange={handleOnChange}
      />
      <button type="submit">SUBMIT</button>
      <button onClick={handleClick}>Test Button</button>
    </form>
  );
}

export default SearchBarInput;
