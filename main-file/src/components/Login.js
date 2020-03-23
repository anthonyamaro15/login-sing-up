import React, { useState } from "react";
import logo from "../img/logo.png";
import auth from "./axios/axiosAuth";
import { Link } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({});

  const getValues = e => {
    const val = { ...values, [e.target.name]: e.target.value };
    setValues(val);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
  };

  auth()
    .post("/api/login", values)
    .then(res => {
      localStorage.setItem("token", res.data.token);
    })
    .catch(err => console.log(err));

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
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="email"
            placeholder="Email adress or username"
            name="email"
            onChange={getValues}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={getValues}
          />
        </div>
        <div className="buttons">
          <div className="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              onChange={getValues}
            />
            <label htmlFor="checkbox">Remember me</label>
          </div>
          <div className="button">
            <button>log in</button>
          </div>
        </div>
        <span className="reset">Forgot your password?</span>
        <div className="no-account">
          <h3>Don't have an account?</h3>

          <button>
            <Link to="/signup">sign up for spotify SongSuggester</Link>
          </button>
        </div>

        <p>Terms & Conditions and Privacy Policy.</p>
      </form>
    </div>
  );
};

export default Login;
