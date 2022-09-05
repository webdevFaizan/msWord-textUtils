import React, {useState} from 'react'
// Here the useState is a react hook. This is used to hook a variable that would moniter the changes in that variable and display all the changes in the page that are occuring due to that variable without actually the webpage being reloaded.

//For example - We are hooking the state of text inside the textarea with a variable 'text'. And this text will monitered throughout the page. 


//Before the function based component became popular, developers were using the class based components, and in the class based components the developers could easily change the state of the variable with the help of 'this.state' But when function based component became popular then react developed something called hooks. Now the state of the whole variable could be tracked over all the pages without the page being reloaded.

//So, in short react hooks allows us to use the features of class without the use of class. And react hook is one of the most important feature of updating the state of the variable live wihtout the refresh of the pages.

import './textForm.css'

export default function TextForm(props) {
  const [text, setText] = useState('');     //The string that we pass inside the useState('') is the default value of text, even if we do not pass anything to text this would be the default value.
  //First of all this useState variable must always be inside the function. And setText function is already defined, we do not need to re define it, we just need to call it by passing our required value.


  function handleOnChange(e){   //This function is going to take care of the change in the state of the text inside the text area. But we will have to transfer this state to the ‘text’ variable.
    setText(e.target.value);    //This is the only way to actually change the state of the react hook. And we cannot change the state of the hook 'text' directly just as well change all the other variables in JS. Meaning the following is wrong -
    //text="asdfhsdlfk";

    //Listening to the onChange event is very important especially if you are using the react state hooks. This is the only way to change the current value of the state variable.
  }


  function fireOnClickUpper(){
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UPPERCASE", "success");
  }
  function fireOnClickLower(){
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  }

  function fireOnClickSentenceCase(){
    let first=text.substring(0,1);
    first=first.toUpperCase();
    let rest=text.substring(1).toLowerCase();
    setText(first+rest);
    props.showAlert("Converted to Sentence Case", "success");
  }

  
  const fireOnClickClear = ()=>{
    setText("");
    props.showAlert("Cleared", "success");
  }

  const fireOnClickTitleCase = ()=>{
    let arr = text.split(" ");
    let temp="";
    for(let word of arr)
    {
      let first=word.substring(0,1).toUpperCase();
      let rest=word.substring(1).toLowerCase();
      temp=temp+first+rest+" ";
    }
    console.log(temp);
    setText(temp);
    props.showAlert("Converted to Title Case", "success");
  }
  

  const fireOnClickUndo = () =>{
    
  }

  const fireOnClickOriginal = () =>{
    
  }

  const fireOnClickCopy = () =>{
    navigator.clipboard.writeText(text);
    // I have not researched but we could easily disable copying of the text of the element using some similar commands, or if we paste anything in this field we could get notified about the status that the field has been copied. This could be helpful in those cases where you do not want anyone to copy anything, for example while during the examination.
    
    alert("Copied");
  }

  const fireOnClickRemoveExtraSpaces = () =>{
    let arr=text.split(/[ ]+/);
    setText(arr.join(" "));
  }

  const preview = () =>{
    //This is the conditional rendering I was talking about, since we do not have any text, we should return an empty container.
    if(text.length===0){    //This is the norm of react, we have to add triple equal to === in order to get no error in react.
      return;
    }
    else{   
      let arr = text.split(" ");
      let temp="";
      let first;
      let rest;
      for(var i=0; i<arr.length; i++)
      {
        if(i===0)
        {
          first=arr[i].substring(0,1).toUpperCase();
        }
        else{
          first=arr[i].substring(0,1);
        }
        rest=arr[i].substring(1).toLowerCase();
        temp=temp+first+rest+" ";
        first='';
      }      
      return (        //This return statement is having 2 different tags, so we need to return them covered in the nameless tag. This is the norm of react that any return statement with more than one html tag must consist of this name less tag.
        <>
          <h1 >Preview of your Text -</h1>        
          <p>{temp}</p>
        </>
      )
    }
  }

  // const buttonStyle = {
  //   // padding : '10px',
  //   border : '0px solid red',
  //   borderRadius : '12px',
  //   
  //   // visiblity : `${if(text.length===0?'hidden':'none')}`
    
  // };

  const buttonStyle = ()=>{
    const obj={};
    obj.border='0px solid red';
    obj.borderRadius='12px';
    obj.color = props.color==='black'?'black':'lightgreen';
    obj.backgroundColor = props.color==='black'?'white':'black';
    obj.boxShadow = '3px 5px';
    // obj.visiblity= text.length===0?'hidden':'visible';
    // obj.display= text.length===0?'none':'';
    obj.textDecoration = text.length===0?'line-through': '';
    obj.opacity=text.length===0?0.2:1;
    // obj.transitionDuration=text.length===0?10000:0.2;
    obj.transition='padding 200';
    // console.log(text.length);
    return obj;
  }

  function numberOfWords(){
    let arr = text.split(/\s+/).filter((element)=>element.length!==0);
    return arr.length;
  }
  function numberOfCharacters(){
    return text.length;
  }

  const numberOfSentences = ()=>{
    let arr = text.split("\n").filter((element)=>element.length!==0);
    return arr.length;
  }

  return (
    <>
    <div className='container'>
        <h1 style={{color : props.color}}>Enter the TEXT</h1>
        <div className="form-group" >            
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" style={{color : props.color==='black'?'black':'lightgreen', backgroundColor : props.color==='black'?'white':'black', boxShadow : '3px 5px'}} placeholder="Please input the text to convert." rows="8"></textarea>
            {/* If inside this textarea, if we are not going to add this onChange method then we will not be able to add any change inside the text area. We will not be able to administer any change. */}
        </div>
        <div className='buttonContainer' style={{minHeight : '90px'}}>
          <div className="button1">
            <button  disabled={text.length===0} className=" textFormButton mx-1 my-1" onClick={()=>{fireOnClickUpper()}} style ={buttonStyle()} >Convert to UPPERCASE</button>
            {/* Note here, in the onClick method, onClick method only requires a function, it does not require a function call. And passing fireOnClickLower is exactly this, but if we have to call the function, like in a case when we have to fire the method with some parameter, then we will have to enclose it within an arrow or any other function. So let us think what this does, when the element here is clicked, the arrow function will be called upon and that arrow function will call the fireOnClickUpper method. Which will the exact same thing as the button to convert Lowercase is doing. */}
          </div>
          <div className="button1">
            <button  disabled={text.length===0} className=" textFormButton mx-3 my-1" onClick={fireOnClickLower} style ={buttonStyle()} >Convert to LOWERCASE</button>
          </div>
          <div className="button1">
            <button  disabled={text.length===0} className=" textFormButton mx-1 my-1" onClick={fireOnClickSentenceCase}style ={buttonStyle()} >Sentence Case</button>        
          </div>
          <div className="button1">
            <button  disabled={text.length===0} className=" textFormButton mx-1 my-1" onClick={fireOnClickTitleCase} style ={buttonStyle()}  >Title Case</button>
          </div>
          <div className="button1">
            <button  disabled={text.length===0} className=" textFormButton mx-1 my-1" onClick={fireOnClickCopy} style ={buttonStyle()}  >Copy Text</button>
          </div>
          <div className="button1">
            <button  disabled={text.length===0} className=" textFormButton mx-1 my-1" onClick={fireOnClickRemoveExtraSpaces} style ={buttonStyle()}  >Remove Extra Spaces</button>
          </div>
          <div className="button1">
            <button  disabled={text.length===0} className=" textFormButton mx-1 my-1" onClick={fireOnClickUndo} style ={buttonStyle()}  >Undo</button>
          </div>
          <div className="button1">
            <button  disabled={text.length===0} className=" textFormButton mx-1 my-1" onClick={fireOnClickOriginal} style ={buttonStyle()}  >Original</button>
          </div>
          <div className="button1">
            <button  disabled={text.length===0} className=" textFormButton mx-1 my-1" onClick={fireOnClickClear} style ={buttonStyle()} >Clear</button>
          </div>
        </div>
    </div>
    <div className="container" style={{color : props.color}}>
      <h1 >Your Text Summary</h1>
      <p>{numberOfWords()+ " Words"}</p>
      <p>{numberOfCharacters() +" Characters "}</p>
      <p>{numberOfSentences()+ " Sentences"}</p>
      <p>{0.48*numberOfWords()+ " seconds required for Reading"}</p>
    </div>
    <div className="container" style={{color : props.color}}>
      {/* This div tag is only possible because of the react hooks, since the changes on the text inside the textarea is being done, but since the hook is attatched to that variable, and this is why where ever we are using the same hook we are able to update the code without the page reload. This is the power of react hook. */}
      {preview()}
      {/* VERY IMPORTANT : This is the final html like syntax that is going to be sent over to the index.html to be rendered, and this is why if you have a conditional rendering like in this case we wanted to have no headline of 'Preview' if there is no text available, but if even one word is available then this would be a case of the conditional rendering, and this is why we do not do this conditional rendering here, we do all the conditional rendering in the function call . Let us go to the preview() method now ----*/} 
    </div>
    </>
  )
}




