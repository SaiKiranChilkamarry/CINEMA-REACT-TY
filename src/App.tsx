import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from"./components/About";// Ensure these components exist
import Contactus from"./components/Contactus";
import Home from"./components/Home";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <div className="box">
          <div className="heading">
            <Header />
          </div>
          <div className="description">This is a UI Layout with CSS</div>
          <div className="button">Click me</div>

          {/* Define the routes here */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contactus />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
