import React from 'react';

const SinglePlant = (props) => {
  return (
    <div id="innerDiv">
      <div className="overlay overlayLeft">
        <a href="#" id="plantLinks">
          <img src={props.url} />
        </a>
        <div className="after">Plant Name</div>
      </div>
    </div>
  );
};

export default SinglePlant;
