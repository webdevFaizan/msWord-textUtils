import React from 'react'
import { Link } from 'react-router-dom';
// Navbar.css
import './navbar.css';

export default function Navbar(props) {
    // Class has to be replaced by class name.
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <Link className="navbar-brand" to="/">MSWord-Text Utility</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                {/* These are the elements that will be displayed on the page with the help of react, but for the action part, the routers in the App.js will be activated, just like it would be calling functions upon the clicking of the route link. The router will be selected from the app.js file and they will ultimately give us the rendered code without the page being reloaded again.*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/tutorial">Tutorial</Link>
                </li>    
                {/* 
                    <li className="nav-item">
                        <Link className="nav-link" to="/tutorial">{props.tutorialName}</Link>
                    </li>  
                    Notice here is the props being used, we can change the name of the website or the router as per our needs from the props.
                 */}
                <li className="nav-item">
                    <Link className="nav-link" to="/blog">Blog</Link>
                </li>  
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>         
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>  
                </ul>
                {/* <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-primary btn-danger my-2 my-sm-0" type="submit">Search</button>
                </form> */}

                <div className={`pageColor text-${props.mode==='light'?'dark':'light'}`}>
                <p> Enable {`${props.mode==='light'?'dark':'light'}`} Mode</p>
                    <label className="switch">                    
                    <input type="checkbox" onClick={props.onChange}/>  
                    {/* Here the input tag does not have an ending tag, so we will have to add an ending tag. */}
                    <span className="slider round"></span>  
                    </label>
                </div>
            </div>
        </nav>
    </div>
  )
}


// If we want to add proptypes, this could be done here. Proptypes are added to the file that is being finally rendered, we could add all the restriction over the props that we are receiving here. Following is the syntax.

/*


*/