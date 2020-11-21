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

  //useEffect(() => {}, []);
  // {plants}
  return <AllRows url={url} />
};

export default Greenhouse;
