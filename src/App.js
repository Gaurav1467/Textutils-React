// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('Light');
  const [alert, setalert] = useState(null);

  const toggleMode = ()=> {
    if(mode==='blue' || mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor ="white";
      showAlert("Light Mode has been enable","success");
    }
    else{
      setMode('dark'); 
      document.body.style.backgroundColor = "#2b2e30";
      showAlert("Dark Mode has been enable","success");
      
    }
  }

  const toggleBMode = ()=>{
    if(mode==='blue' || mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor ="white";
      showAlert("Red Mode has been enable","success");
    }
    else{
      setMode('blue');
      document.body.style.backgroundColor ="#00d4ff";
      showAlert("Light Mode has been enable","success");

    }
  }

  const showAlert = (message,type)=> {
      setalert({
        msg : message,
        type : type
      })

      setTimeout(() => {
        setalert(null);
      }, 1800);
  }

  return (
  <>
  {/* <Router> */}
  <Navbar title = "Textutils" about = "About Us" mode={mode} toggleMode = {toggleMode} toggleBMode = {toggleBMode}/>
  <Alert alert = {alert} />
  <div className="container my-3">
  <Textform showAlert={showAlert} heading = " Enter the text to analyze" mode = {mode}/>
  </div>
  {/* </Router> */}

 </>
  );
}

export default App;
