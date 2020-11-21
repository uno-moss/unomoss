import React from 'react';
import { Link } from 'react-router-dom';

import noImage from '../../assets/no-image.png';

function SearchResults(props) {
  console.log(props);
  function plantImage(plant) {
    console.log(plant);
    // console.log('No Image: ')
    if (plant.image_url === null) {
      return <img src={noImage} />;
    } else {
      return <img src={plant.image_url} />;
    }
  }
  return (
    <div className="AllPlants Container">
      {props.plants.map((plant) => {
        return (
          <Link
            to={{
              pathname: '/plant',
              userPlant: plant,
            }}
            key={plant.id}
          >
            <div className="Plant Container">
              {/* <img src={plant.image_url} /> */}
              {plantImage(plant)}
              <p className="plantName">{plant.common_name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default SearchResults;
