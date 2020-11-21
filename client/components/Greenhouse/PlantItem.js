import React from 'react';

const SinglePlant = (props) => {
  return (
    <div id="innerDiv">
      <img src={props.url} />
    </div>
  );
};

export default SinglePlant;
