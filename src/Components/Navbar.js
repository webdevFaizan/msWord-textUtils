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
                <li className="nav-item">
                    <Link className="nav-link" to="/tutorial">Tutorial</Link>
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
