/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Greenhouse.scss';
import AllRows from './AllPlants';
import SinglePlant from './PlantItem';

//import Plant from "./components/Plant/Plant";
//import SearchPlant from "./components/SearchPlant/SearchPlant";

const Greenhouse = () => {
  return <AllRows />;
  // return (
  //   <div>
  //     Greenhouse page
  //     <Link to="/plant">Go to plant</Link>
  //     <Link to="/search">Go to Search</Link>
  //   </div>
  // );
};

export default Greenhouse;
