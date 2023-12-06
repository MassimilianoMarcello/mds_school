import React from "react";


import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMds from "./components/pages/AboutMds";
import Admissions from "./components/pages/Admissions";
import InTheClassroom from "./components/pages/InTheClassroom";
import MyMds from "./components/pages/MyMds";
import Marketing from "./components/pages/Marketing";
import Leadership from "./components/pages/Leadership";
import ParentResources from "./components/pages/ParentResources"
import CommunityResources from "./components/pages/CommunityResources"
import SupportingMds from "./components/pages/SupportingMds"
import OurBoard from './components/pages/OurBoard';
import EmployementOpp from './components/pages/EmplyementOpp';
import MdsAtGlance from './components/pages/MdsAtGlance';
// import FullScreenImage from "./Hero Section/FullScreenImage";
// import ScrollSection from "./Main Section/ScrollSection";
// import MainSectionen from "./MainSectionen";
import Navbar from "./components/NavBar";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
      <Route path="/" element={<Navbar />} />
        <Route path="/" element={<Home />} />
        <Route path="/about_mds" element={<AboutMds />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/in_the_classroom" element={<InTheClassroom />} />
        <Route path="/my_mds" element={<MyMds />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/our_board" element={<OurBoard />} />
        <Route path="/parent_resources" element={<ParentResources />} />
        <Route path="/community_resources" element={<CommunityResources />} />
        <Route path="/supporting_mds" element={<SupportingMds />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/mds_at_a_glance" element={<MdsAtGlance />} />
        <Route path="/employement_opportunities" element={<EmployementOpp />} />
     
      </Routes>
  
    </Router>
  );
}

export default App;
