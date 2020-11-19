import React from 'react';
import './styles/App.scss';
import { motion } from "framer-motion";

import About from './pages/About.js';
import Video from './pages/Video.js';
import Web from './pages/Web.js';

import HeaderGraphic from './components/HeaderGraphic';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <HeaderGraphic/>         
      <About/>
      <Video/>
      <Web/>
      <Footer/>
    </div>
  );
}

export default App;
