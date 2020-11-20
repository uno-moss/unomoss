import React from 'react';
import { Link } from 'react-router-dom';

const Greenhouse = () => {
  return (
    <div>
      Greenhouse page
      <Link to="/plant">Go to plant</Link>
    </div>
  );
};

export default Greenhouse;
