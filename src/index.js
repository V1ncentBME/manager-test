import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SiderDemo from "./SiderDemo";
require("./mock.js");

ReactDOM.render(
  // <React.StrictMode>
  <SiderDemo />,
  // </React.StrictMode>
  document.getElementById("root")
);
