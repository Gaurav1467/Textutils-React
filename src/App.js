// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('Light');
  const [alert, setalert] = useState(null);

  const toggleMode = ()=> {
    if(mode==='dark'){
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
  <Router>
  <Navbar title = "TextUtils" about = "About Us" mode={mode} toggleMode = {toggleMode} />
  <Alert alert = {alert} />
  <div className="container my-3">

      <Switch>
              <Route path="/about">
                <About mode={mode}/>
              </Route>
              <Route path="/">
              <Textform showAlert={showAlert} heading = "Try TextUtils - Word counter and Text Manipulator " mode = {mode}/>
              </Route>
            </Switch>
  </div>
  </Router>

 </>
  );
}

export default App;
