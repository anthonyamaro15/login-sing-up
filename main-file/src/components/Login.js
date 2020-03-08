import React from "react";
import logo from "../img/logo.png";

const Login = () => {
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
          <input type="text" placeholder="Email adress or username" />
          <input type="text" placeholder="Password" />
        </div>
        <div className="buttons">
          <div className="checkbox">
            <input type="checkbox" id="checkbox" />
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
            <a href="">sign up for spotify SongSuggester</a>
          </button>
        </div>

        <p>Terms & Conditions and Privacy Policy.</p>
      </section>
    </div>
  );
};

export default Login;
