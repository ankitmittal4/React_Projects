import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import App2 from "./App2";
import App3 from "./App3";

// import DigitalClock from "./DigitalClock";
// import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <>
    <App3 />
    {/* <h1>Hello</h1>
    <button className="btn btn-success">Ankit Mittal</button> */}
  </>,
  document.getElementById("root")
);
