
import React, { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [colorOfEveryElement, setColorOfEveryElement] = useState('black');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {    
    setAlert({
      msg : message,
      type : type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);    
  }


//As we have learnt in the express-ejs view engine, this file app.js is like a layout for all other files. And toggleMode should be present on the layout file as it will be present on every page on the website, this is why we are adding it here. Or this could have been added to the index.js with some changes in the index.js files. But the main point is that it will be present on all the webpages.
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#494a4b';
      setColorOfEveryElement('white');
      showAlert("Dark mode has been enabled", "success");
      setInterval(()=>{
        document.title="Dark Mode Enabled";
      },2000);
      setInterval(()=>{
        document.title="React App is the best";
      },1000);
    }

    else if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setColorOfEveryElement('black');
      showAlert("Light mode has been enabled", "success");
    }
  }

//Always remember that the function App will only return the html like syntax, the jsx. And it will only return one tag, if we want to add more than one tags then we will have to wrap them both into some other tag.
  return (  
    <>
      <Router>
          <Navbar mode={mode}  onChange={toggleMode}/>  
          {/* Here the Navbar is a component that has been created in the components folder and this will consist of its own element in its own folder. And just by importing this component, we could easily reuse this component over and over again. */}
          <div className="alertContainer">
            <div className="alertBox">
              <Alert alert={alert}/>
            </div>
          </div>
          <div className="container my-3">
          <Routes>
              <Route exact path="/" element={<TextForm color={colorOfEveryElement} showAlert={showAlert}/>}/>
              <Route exact path="/about" element={<About color={colorOfEveryElement}/>}/>                                        
          </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;



