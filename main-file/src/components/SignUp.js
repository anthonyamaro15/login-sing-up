import React from "react";
import logo from "../img/logo.png";

const SignUp = () => {
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
      <section>
        <div className="input-container">
          <input type="email" placeholder="Email" />
          <input type="email" placeholder="Confirm email" />
          <input type="password" placeholder="Password" />
        </div>
        <label htmlFor="date">Date of birth</label>
        <div className="date-of-birth" id="date">
          <input type="text" placeholder="Month" />
          <input type="text" placeholder="Day" />
          <input type="text" placeholder="Year" />
        </div>
        <span className="terms">
          By clicking on Sign up, you agree to Spotify's SongSuggester{" "}
          <a href="">Terms and Conditons of Use.</a>
        </span>
        <div className="btn">
          <button>sign up</button>
        </div>

        <span className="login">
          Already have an account? <a href="">Log in</a>
        </span>
      </section>
    </div>
  );
};

export default SignUp;
