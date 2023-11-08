import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Nav />
    <Main />
    <Footer />
  </React.StrictMode>
);
