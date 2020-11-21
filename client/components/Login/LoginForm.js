/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Login.scss';
import SignupForm from './SignupForm.js';
import { Redirect } from 'react-router-dom';

const LoginForm = () => {
  const [ redirect, setRedirect ] = useState('');
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const logIn = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    console.log(logIn);
    setRedirect(<Redirect to="/greenhouse" />);
  }

  //islogin if true
  //
  return (
    <div className="login-body">
      { redirect }
      <div>&nbsp;</div>
      <div id="login-box">
        <img src="https://cdn4.iconfinder.com/data/icons/agriculture-soft/512/agriculture_farming_business_plant_farm_nature-512.png" />
        <br></br>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label for="name">Email:&nbsp;&nbsp;</label>
          <input
            type="text"
            id="email"
            name="email"
            ref={register}
            required
          />
          <br></br>
          <br></br>
          <label for="password">Password:&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input
            type="text"
            id="password"
            name="password"
            ref={register}
            required
          />
          <br></br>
          <br></br>
          <button type="submit" ref={register}>
            SIGN IN
          </button>
        </form>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <p>
          Don't have an account?
          <button id="signUpClick" onClick="handleClick">
            Sign up
          </button>
        </p>
      </div>
      <div>&nbsp;</div>
    </div>
  );
};

export default LoginForm;
