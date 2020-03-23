import React from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
