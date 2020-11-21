import React from 'react';

function SearchResults(props) {
  console.log(props);

  return (
    <div className="AllPlants Container">
      {props.plants.map((plant) => {
        return (
          <div className="Plant Container" key={plant.id}>
            <img src={plant.image_url} />
            <p className="plantName">{plant.common_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default SearchResults;
