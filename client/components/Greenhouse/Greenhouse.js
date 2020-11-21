/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Greenhouse.scss';
import AllRows from './AllPlants';
import SinglePlant from './PlantItem';

const url = 'https://image-server-codesmith.firebaseapp.com/images';
//import Plant from "./components/Plant/Plant";
//import SearchPlant from "./components/SearchPlant/SearchPlant";

const Greenhouse = () => {
  // plants will be an array of plants
  //const [plants, setPlants] = useState([]);
  // on mount: fetch user's collection of plants from the db
<<<<<<< HEAD
  //useEffect(() => {}, []);
  // {plants}
  return <AllRows url={url} />;
=======
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
>>>>>>> 36c3403abb8e6a16c299ed8b053c858051640ebe
};

export default Greenhouse;
