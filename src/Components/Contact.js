import React from 'react'
import './contact.css';

const Contact = (props) => {    
  return (
    <div className={`contactPage`} style={{backgroundColor : `${props.color==='black'?'white':'grey'}`}} >        
        <strong>Please contact us using the following </strong>
        <ul style={{margin: '20p', padding:'20p', backgroundColor : `${props.color==='white'?'white':'grey'}`}}>
            <li>
                <strong>webdev.faizan@gmail.com</strong>
            </li>
            <li>
                <strong>Discord</strong>
            </li>
            <li>
                <strong>Facebook</strong>                
            </li>
            <li>
                <strong>Whatsapp</strong>
            </li>
        </ul>
    </div>
  )
}
export default Contact
