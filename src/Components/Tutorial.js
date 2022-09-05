import React from 'react'

const Tutorial = (props) => {    
  return (
    <div className={`tutorialPage`} style={{color : `${props.color}`}} >
        <strong>You are on the tutorial Page</strong>
        <strong>Sample Text - </strong>
        <br />
        <br />
        <br />
        Sample Input -
        <strong>This is a MS Word Text Utility Tutorial</strong>
        <br />
        Converting it to the full Uppercase -
        <br />
        Sample output - 
        <strong>THIS IS A MS WORD TEXT UTILITY TUTORIAL</strong>
        <br />
        <br />
        <br />
        Sample Input -
        <strong>This Is A Tutorial For Converting The Sentence To LowerCase</strong>
        <br />
        Converting it to the full Lowercase -
        <br />
        Sample output - 
        <strong>this is a tutorial for converting the sentence to lowercase</strong>
        <br />
        <br />
        <br />
    </div>
  )
}
export default Tutorial
