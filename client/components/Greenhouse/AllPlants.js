/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import SinglePlant from './PlantItem';

const AllRows = () => {
  const urlData = 'https://image-server-codesmith.firebaseapp.com/images';
  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log('component mounted');
    fetch(urlData)
      .then((resp) => {
        console.log(resp);
        return resp.json();
      })
      .then((data) => {
        console.log('data', data);
        setImages(data);
        // console.log(images);
      });
  }, []);

  return (
    <div id="#outerDiv">
      {images.map((el) => {
        return <SinglePlant url={el} />;
      })}
    </div>
  );
};

export default AllRows;
