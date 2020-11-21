/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Login.scss';
import SignupForm from './SignupForm.js';

const LoginForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  //islogin if true
  //
  return (
    <div className="login-body">
      <div>&nbsp;</div>
      <div id="login-box">
        <img src="https://cdn4.iconfinder.com/data/icons/agriculture-soft/512/agriculture_farming_business_plant_farm_nature-512.png" />
        <br></br>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label for="name">User name:&nbsp;&nbsp;</label>
          <input
            type="text"
            id="userName"
            name="userName"
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
          <button id="signUpClick" onClick="">
            Sign up
          </button>
        </p>
      </div>
      <div>&nbsp;</div>
    </div>
  );
};

export default LoginForm;
