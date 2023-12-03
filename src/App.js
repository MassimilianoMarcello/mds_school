import React from "react";

import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMds from "./components/pages/AboutMds";
import Products from "./components/pages/Products";
import ContactUs from "./components/pages/ContactUs";
import MyMds from "./components/pages/MyMds";
import Marketing from "./components/pages/Marketing";
import Consulting from "./components/pages/Consulting";
// import FullScreenImage from "./Hero Section/FullScreenImage";
// import ScrollSection from "./Main Section/ScrollSection";
// import MainSectionen from "./MainSectionen";
import Navbar from "./components/NavBar";

function App() {
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_mds" element={<AboutMds />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/my_mds" element={<MyMds />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/consulting" element={<Consulting />} />
      </Routes>
  
    </Router>
  );
}

export default App;
