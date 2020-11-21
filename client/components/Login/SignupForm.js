import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Login.scss";

const SignupForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="login-body">
      <div>&nbsp;</div>
      <div id="login-box">
        <img src="https://cdn4.iconfinder.com/data/icons/agriculture-soft/512/agriculture_farming_business_plant_farm_nature-512.png" />
        <br></br>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <label for="firstName">First Name:&nbsp;&nbsp;</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            ref={register}
            required
          />
          <br></br>
          <br></br>
          <label for="lastName">Last Name:&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            ref={register}
            required
          />
          <br></br>
          <br></br>
          <input
            type="text"
            id="userName"
            name="userName"
            ref={register}
            required
          />
          <br></br>
          <br></br>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
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
            SIGN UP
          </button>
        </form>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
      </div>
      <div>&nbsp;</div>
    </div>
  );
};
export default SignupForm;
