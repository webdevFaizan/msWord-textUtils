//This index.js file is the first file that will be looked upon while running the website.

//The following import statements should not be mugged up, these will come pre written when we install create-react-app
//Using create-react-app, will organise the complex app and this npm package will divide the complex app into different different folder structure.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));    //From the index.html we will get the element and inject the react code to this div. In this project we have only one component, but in real life application there are more than one components, which we will learn in the NewsMonkey app.
root.render(

  // This Strict mode is automatically enabled for the React apps, this is the best industry practice especially regarding react.
  //This below line will directly take us to the app.js file and that would display all the code on that file.
  <React.StrictMode>  
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
