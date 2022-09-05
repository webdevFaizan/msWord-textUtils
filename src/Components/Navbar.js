import React from 'react'
import { Link } from 'react-router-dom';
// Navbar.css
import './navbar.css';

export default function Navbar(props) {
    // Class has to be replaced by class name.

    const buttonSize = {width: '30px', height : '30px'};
    const lightButton = (buttonSize)=>{
        let border={border : '2px solid red'};
        let obj= {...buttonSize, ...border};
        return obj;
    }
    const darkButton = (buttonSize)=>{
        let border={border : '2px solid white'};
        let obj= {...buttonSize, ...border};
        return obj;
    }
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
                    <Link className="nav-link" to="/sign-up">Sign Up</Link>
                </li>    
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>  
                </ul>
                {/* <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-primary btn-danger my-2 my-sm-0" type="submit">Search</button>
                </form> */}

                {/* <div className="buttonList">
                    {'Select a Theme ->'}
                                 
                </div> */}
                
                <div  className="dropdown ">
                    <button  className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Themes
                    </button>
                    <div  className="dropdown-menu dropdown-menu-left" aria-labelledby="dropdownMenu5">
                        <button type="button" className="btn btn-light mx-2 my-2" onClick={()=>{props.onChange('light')}} style={lightButton(buttonSize)} ></button>
                        <button type="button" className="btn btn-dark mx-2 my-2" onClick={()=>{props.onChange('dark')}} style={darkButton(buttonSize)}></button>   
                        <button type="button" className="btn btn-primary mx-2  my-2" onClick={()=>{props.onChange('primary')}} style={buttonSize}></button>
                        {/* Explaination of onClick - Here I have added a functionality of enabling different themes as per requirement. onClick takes a function and not the function call, this is why we had to enclose it in an arrow function, and inside the arrow function we called the function with some parameter, and this is the only way to call a function with a parameter. Now this onChange will call the toggleMode(cls) with a specific parameter.*/}
                        <button type="button" className="btn btn-secondary mx-2 my-2" onClick={()=>{props.onChange('secondary')}} style={buttonSize}></button>
                        <button type="button" className="btn btn-success mx-2 my-2" onClick={()=>{props.onChange('success')}} style={buttonSize}></button>
                        <button type="button" className="btn btn-danger mx-2 my-2" onClick={()=>{props.onChange('danger')}} style={buttonSize}></button>    
                        <button type="button" className="btn btn-info mx-2 my-2" onClick={()=>{props.onChange('info')}} style={buttonSize}></button>
                    </div>
                </div>

                <div className="empty mx-2" style={{width : '120px', height: '20px', backgroundColor: 'red', visibility: 'hidden'}}></div>

                <div className={`pageColor text-${props.mode==='light'?'dark':'light'}`} style={{display : 'none'}}>
                <p> Enable {`${props.mode==='light'?'dark':'light'}`} Mode</p>
                    <label className="switch">                    
                    <input type="checkbox" onClick={props.onChange}/>  
                    {/* IMPORTANT : We are changing the state variable of color with the help of function that we call into this Navbar component, and the toggle mode could be separate component in the app.js having a position sticky like other elements, but we decided to keep it as a component of the Navbar and this is why we needed to have a funciton call to change the state of the variable, note since this has been received in props, we could not have changed the value of the porps directly, this is why  we had to send it as a function, function is not going to be changed, but once the function is called, the state variable inside that function could be changed.*/}
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