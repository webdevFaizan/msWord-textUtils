import React from 'react'

const About = (props) => {
  return (
    <>
    <div className="container" style={{color : `${props.color}`}}>
        <h1>About Section</h1>        
        <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item" style={{backgroundColor : `${props.color==='black'?'white':'grey'}`}}>
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{color : `${props.color==='black'?'green':'lightgreen'}` ,backgroundColor : `${props.color==='black'?'white':'black'}`}}>
                Online Character Count Tool
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body" style={{color : `${props.color==='black'?'black':'white'}`}}>
                A while back I needed to count the amount of letters that a piece of text in an email template had (to avoid passing any character limits). Unfortunately, I could not think of a quick way to do so on my macbook and I therefore turned to the Internet.
                <br />
                <br />
                There were a couple of tools out there, but none of them met my standards and since I am a web designer I thought: why not do it myself and help others along the way? And... here is the result, hope it helps out!
                </div>
              </div>
            </div><div className="accordion-item" style={{backgroundColor : `${props.color==='black'?'white':'grey'}`}}>
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{color : `${props.color==='black'?'green':'lightgreen'}` ,backgroundColor : `${props.color==='black'?'white':'black'}`}}>
                  What is this?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body" style={{color : `${props.color==='black'?'black':'white'}`}}>
                    Character Count Online is a free online character and word counting tool.
                    All results are immediately shown and it is ridiculously easy to use and of course, the service is completely free.
                </div>
              </div>
            </div>
            <div className="accordion-item" style={{backgroundColor : `${props.color==='black'?'white':'grey'}`}}>
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={{color : `${props.color==='black'?'green':'lightgreen'}` ,backgroundColor : `${props.color==='black'?'white':'black'}`}}>
                How is it used?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body" style={{color : `${props.color==='black'?'black':'white'}`}}>
                You can copy and paste your text with the characters to count in the text area above, or you can type your characters and words into the text area. The counter will be updated instantly, displaying the amount of characters, words, sentences, paragraphs and whitespace in your text, not to mention that the keyword density (which you can configure from the options menu) is also displayed.
                </div>
              </div>
            </div>
            <div className="accordion-item" style={{backgroundColor : `${props.color==='black'?'white':'grey'}`}}>
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree" style={{color : `${props.color==='black'?'green':'lightgreen'}` ,backgroundColor : `${props.color==='black'?'white':'black'}`}}>
                Which devices does the counter work on?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body" style={{color : `${props.color==='black'?'black':'white'}`}}>
                  Character Count Online works on absolutely any device.
                  No matter if you have a mobile phone, computer, console or tablet the counter will work perfectly!
                </div>
              </div>
            </div>
          </div>
    </div>
    </>
  )
}

export default About
