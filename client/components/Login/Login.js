import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SignupForm from './SignupForm.js';
import LoginForm from './LoginForm.js';

const Login = () => {
  // const [isToggled, setToggled] = useState(false);
  // const toggleTrueFalse = () => setToggled(!isToggled);
  const [newUser, setLoggedIn] = React.useState(false);
  const handleClick = (e) => {
    setLoggedIn(!newUser);
  };
  return (
    <div>
      {newUser ? (
        <SignupForm handleClick={handleClick} />
      ) : (
        <LoginForm handleClick={handleClick} />
      )}
    </div>
  );
};

export default Login;
