import './App.css';
import React, {useState} from 'react'
import Header from './Header';
import Navbar from './Navbar';
import Courses from './Courses';
import Contact from './Contact';
import Offer from './Offer';
import Feature from './Feature';
import Footer from './Footer';
import About from "./About"
import SocialIcons from './SocialIcons';
import Menu from "./images/menu.png"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

           



function App() {
  const [open, setOpen] = useState(false);


  return (
    <div className="app">
      <Router>
        {open && <Navbar />}
        <img src={Menu} className="menuBtn" onClick={() => {setOpen(!open)}}></img>
          <Header />
          <About />
          <Feature />
          <Courses />
          <Offer />
          <Contact />
          <Offer />
          <SocialIcons />
          <Footer />
      </Router>
    </div>
  );
}

export default App;
