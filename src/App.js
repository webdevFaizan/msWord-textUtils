import React, { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Contact from './Components/Contact';
import Tutorial from './Components/Tutorial';
import Blog from './Components/Blog';
import SignUp from './Components/SignUp';


// This app.js is the main file of the whole app, this will contain all the components of all the website, so that this file looks clean, this is why Navbar component is retruned by this function but the main code base of Navbar is written in some other file.



// The following is the router function of react that has to be installed separately using a package of 'react-router-dom' this is the main package that will enable us to have the main functionality of react, the single page application without page reload.
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// In the react router dom documentation, we could find the above written statements, this is like a specific syntax related to the react-router-dom which could be used to setup and run react router dom.



// var id=null;    //This is one usecase of global variable that is very helpful in this case, since we are storing the id of the previous setTimeout method we will be able to clear it before we set the next setTimeout method. But in the another more advanced defination of showAlert method we have removed this use of the global variable and passed the id of the clearTimeout as a state variable in the alert object.

function App() {
  const [mode, setMode] = useState('dark');
  const [colorOfEveryElement, setColorOfEveryElement] = useState('white');    //We are enabling the state hook for changing the color of the whole website, this is done since all of the website's color is being considered as a state of the webiste. And in order to change the state of the website on some event change we need to hook it to some variable.
  
  // I have a question, there are two different state variables being created to take care of the same state of the variable? mode and colorOfEveryElement both are tracking the color of the elements on the page, then why is not only one of the above variables being used, why is two of them being used???? One thing I have noticed, mode is being sent to Navbar component, and the colorOfEveryElement is being sent to all the other routes. Why?? I think I have a one liner answer to this question, we are using bootstrap, and in bootstrap we are using these statehooks to define the class that should be applied and this is why we are sending these as separate variable easily.
  

  const [alert, setAlert] = useState(null);   //The first state of the alert variable is set to be equal to null. And the alert variable wil contain an object. And this is the state of the object that is being changed and is being monitered and manupulated over and over again.


  //This showAlert is a method to change the state using a global variable. But usually the global variable is not preferred, so we have written a different logic.

  // const showAlert = (message, type) => {    
  //   setAlert({
  //     msg : message,
  //     type : type
  //   });
  //   // console.log(id);
  //   if(id){
  //     // This condition will first clear the interval of the previous id so that the previous message is interrupted and the next alert message is shown with a new gap of 2000 milliseconds.
  //     clearTimeout(id);
  //     id=null;
  //   }
  //   id=setTimeout(() => {
  //     setAlert(null);
  //   }, 2000);
  // }

  const showAlert = (message, type) => {    
    if(alert && alert.id)   //This condition is to check the avaialbility of the alert object first time, for the first time the alert object is 'null' so alert.id cannot be and should not be accessed. 
    clearInterval(alert.id);    //In this we are simply checking that if the id of the previous setTimeout is present, then first clear it. This will help us in the creation of a free event loop and 2 second gap of each message display will be properly done, without this clearing of the timeout, the new message will be cleared which we clearly do not want.

    var id=setTimeout(() => {
      setAlert(null);
    }, 2000);
    
    setAlert({
      msg : message,
      type : type,
      id: id      //We are getting the first 2 object parameter from the function being called, and the 3rd parameter from this 'id', I had to do this, since there no other way to track the state of the alert object, since we had to memorize the id of the last timout function. If it is passed in the state variable itself it will be remembered, coz this function is not returning anything, neither there is any variable to collect the return value. So the only other option was to take a global variable into account, which should not be preferred.
    });
  }


//As we have learnt in the express-ejs view engine, this file app.js is like a layout for all other files. And toggleMode should be present on the layout file as it will be present on every page on the website, this is why we are adding it here. Or this could have been added to the index.js with some changes in the index.js files. But the main point is that it will be present on all the webpages.


//The following toggleMode is the old version of the toggleMode, where only light or dark theme was enabled, but in the new version of the theme selector we will have options to select the theme from a list of different themes.

  // const toggleMode = () =>{  
  //   if(mode==='light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor = '#494a4b';
  //     setColorOfEveryElement('white');
  //     showAlert("Dark mode has been enabled", "success");
  //     // setInterval(()=>{
  //     //   document.title="Dark Mode Enabled";
  //     // },2000);
  //     // setInterval(()=>{
  //     //   document.title="React App is the best";
  //     // },1000);
  //   }

  //   else if(mode==='dark'){
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     setColorOfEveryElement('black');
  //     showAlert("Light mode has been enabled", "success");
  //   }
  // }

  function removeBgClasses(){
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-light');
  }

  const toggleMode = (cls) =>{
    removeBgClasses();    //First we will remove all the possible bg-classes from the document.body, so that the new once could be added. And the total class list remains finite, if we do not remove the background classes then the new class list will keep on increasing and in the end the list will become very long.
    
    document.body.classList.add('bg-'+cls); //Then add only one.
    //Below are the different scenarios and color and background color combination that will make the website look even more beautiful.
    if(cls==='dark'){
      setMode('dark');
      setColorOfEveryElement('white');
    }

    else if(cls==='light')
    {
      setMode('light');
      setColorOfEveryElement('black');
    }
    else{
      setMode('light');
      setColorOfEveryElement('white');
    }
    
  }

//Always remember that the function App will only return the html like syntax, the jsx. And it will only return one tag, if we want to add more than one tags then we will have to wrap them both into some other tag.
  return (  
    <>
      <Router>
        {/* For now Navbar has a static title, but what if we want to change the title of Navbar as per the Routes we are in, so in that case we will have to pass the props, these props will collect the data of title from Routers and add that data to the Navbar.*/}
          <Navbar mode={mode}  onChange={toggleMode}/>    {/* Notice here that the mode of the website is attatched to the state hook, and not to the props, since props are read only, this simply means, when the togglemode function is altered this will change the mode of the website, as the color of website is being considered as a state variable now. */}          
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
            {/* Using the exact path is going to remove any bug that would be related to paths, this is importatn since path matching could be a problem. */}
              <Route exact path="/" element={<TextForm color={colorOfEveryElement} showAlert={showAlert}/>}/>
              {/* We can send here the heading of the page, as props and the reason we are sending them as props is because we could change the values at one position and data could be updated in all the elements inside by change in one props.*/}
              <Route exact path="/tutorial" element={<Tutorial color={colorOfEveryElement}/>}/>
              <Route exact path="/blog" element={<Blog color={colorOfEveryElement}/>}/>
              <Route exact path="/about" element={<About color={colorOfEveryElement}/>}/>                                        
              <Route exact path="/sign-up" element={<SignUp color={colorOfEveryElement}/>}/>    
              <Route exact path="/contact" element={<Contact color={colorOfEveryElement}/>}/>
          </Routes>
          </div>
      </Router>
    </>
  );
}
export default App;