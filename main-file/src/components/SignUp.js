import React, { useState } from "react";
import logo from "../img/logo.png";
import auth from "./axios/axiosAuth";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [values, setValues] = useState({});
  const [status, setStatus] = useState("");

  const getValues = e => {
    const val = { ...values, [e.target.name]: e.target.value };
    setValues(val);
  };

  const onSubmit = e => {
    e.preventDefault();
    auth()
      .post("api/signup", values)
      .then(res => {
        console.log("this is the response =>", res);
        setStatus(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <div className="header-container">
        <header>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <h1>Spotify SongSuggester</h1>
        </header>
      </div>
      <form onSubmit={onSubmit}>
        <div className="input-container">
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={getValues}
          />
          <input
            type="email"
            placeholder="Confirm email"
            name="cofirm"
            onChange={getValues}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={getValues}
          />
        </div>
        <label htmlFor="date">Date of birth</label>
        <div className="date-of-birth" id="date">
          <input
            type="text"
            placeholder="Month"
            name="month"
            onChange={getValues}
          />
          <input
            type="text"
            placeholder="Day"
            name="day"
            onChange={getValues}
          />
          <input
            type="text"
            placeholder="Year"
            name="year"
            onChange={getValues}
          />
        </div>
        <span className="terms">
          By clicking on Sign up, you agree to Spotify's SongSuggester{" "}
          <a href="">Terms and Conditons of Use.</a>
        </span>
        <div className="btn">
          <button>sign up</button>
        </div>

        <span className="login">
          Already have an account? <Link to="/login">Log in</Link>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
