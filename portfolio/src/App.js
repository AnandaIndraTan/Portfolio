import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Link
} from "react-router-dom";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";



function App() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
