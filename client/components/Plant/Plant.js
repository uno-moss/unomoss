/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import './Plant.scss';

const Plant = (props) => {
  console.log(props);
  // state will be plant details
  // need to import plant img url somehow
  const [details, setDetails] = useState({
    commonName: props.location.userPlant.common_name,
    scientificName: props.location.userPlant.scientific_name,
    flowerColor: '',
    avgHeight: '',
    light: '',
    soilNutrients: '',
    soilHumidity: '',
    minPrecipitation: '',
    maxPrecipitation: '',
    growthMonths: '',
    bloomMonths: '',
  });
  const {
    commonName,
    scientificName,
    flowerColor,
    avgHeight,
    light,
    soilNutrients,
    soilHumidity,
    minPrecipitation,
    maxPrecipitation,
    growthMonths,
    bloomMonths,
  } = details;

  const plantId = 'a number from url param - coming from plant item component';
  // useEffect(() => {
  //   fetch(`/api/userplants/${plantId}`) // '/api/useplants/:id'
  //     .then((resp) => resp.json())
  //     .then((data) => setDetails(data));
  // });

  // on mount: fetch plant details from database using passed in props as url search param? plant name??

  return (
    <div id="outerDiv2">
      <div id="innerDiv2">
        <img src="https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/english/wall-2018-whatareplantsmp4.transform/content-tile-large/image.png" />
      </div>
      <div id="innerDiv2">
        Common Name: {commonName}
        <br></br>
        Scientific Name: {scientificName}
        <br></br>
        Flower Color:{flowerColor}
        <br></br>
        Average Height: {avgHeight}
        <br></br>
        Light: {light}
        <br></br>
        Soil Nutrients: {soilNutrients}
        <br></br>
        Soil Humidity: {soilHumidity}
        <br></br>
        Minimun Precipitation: {minPrecipitation}
        <br></br>
        Maximun Precipitation: {maxPrecipitation}
        <br></br>
        Growth Months:{growthMonths}
        <br></br>
        Bloom Months: {bloomMonths}
        <br></br>
      </div>
      <button id="savePlant" onClick="handleClick">
        Save Plant
      </button>
    </div>
  );
};

export default Plant;
