import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Greenhouse = () => {
  // plants will be an array of plants
  const [plants, setPlants] = useState([]);

  // on mount: fetch user's collection of plants from the db
  // useEffect(() => {
  //   fetch('/').
  // }, [])
  return (
    <div>
      Greenhouse page
      <Link to="/plant">Go to plant</Link>
      <Link to="/search">Go to Search</Link>
    </div>
  );
};

export default Greenhouse;
