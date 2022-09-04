
import React, { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Contact from './Components/Contact';
import Tutorial from './Components/Tutorial';
import Blog from './Components/Blog';




// This app.js is the main file of the whole app, this will contain all the components of all the website, so that this file looks clean, this is why Navbar component is retruned by this function but the main code base of Navbar is written in some other file.



// The following is the router function of react that has to be installed separately using a package of 'react-router-dom' this is the main package that will enable us to have the main functionality of react, the single page application without page reload.
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
        {/* For now Navbar has a static title, but what if we want to change the title of Navbar as per the Routes we are in, so in that case we will have to pass the props, these props will collect the data of title from Routers and add that data to the Navbar.*/}
          <Navbar mode={mode}  onChange={toggleMode}/>  
          {/* Here the Navbar is a component that has been created in the components folder and this will consist of its own element in its own folder. And just by importing this component, we could easily reuse this component over and over again. */}
          <div className="alertContainer">
            <div className="alertBox">
              <Alert alert={alert}/>
            </div>
          </div>
          <div className="container my-3">


            {/* VERY IMPORTANT -  We could easily see that all the above components are common to all the pages, and we have to change the following components using react routers. This is why we have added the Routers here, whichever Route or path we click, the code of that path will be rendered and the navbar and other components will remain the same. Even the alert component will stay the same since it is to be loaded in each and every page of the website.*/}
            {/* VERY IMPORTANT - The router has all the files available for rendering, this means when ever we click on the link only the rendering will be done with the help of router, no new content will be downloaded. And this is why the API call for every component and every route is necessary, if all the contents had to be downloaded then the initial website would be hanged, but since those setup needs to be donwloaded that will be sufficient to call the API when ever the route is hit. This will keep the system lightweight. */}
          <Routes>
            {/* When some one clicks on the link in the navbar then the code is redirected to here, here the next route is taken, that will ultimately render the required page */}
              <Route exact path="/" element={<TextForm color={colorOfEveryElement} showAlert={showAlert}/>}/>
              <Route exact path="/tutorial" element={<Tutorial color={colorOfEveryElement}/>}/>
              <Route exact path="/blog" element={<Blog color={colorOfEveryElement}/>}/>
              <Route exact path="/about" element={<About color={colorOfEveryElement}/>}/>                                        
              <Route exact path="/contact" element={<Contact color={colorOfEveryElement}/>}/>
          </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;



