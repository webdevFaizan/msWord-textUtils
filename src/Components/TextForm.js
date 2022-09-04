import React, {useState} from 'react'
// Here the useState is a react hook. This is used to hook a variable that would moniter the changes in that variable and display all the changes in the page that are occuring due to that variable without actually the webpage being reloaded.

//For example - We are hooking the state of text inside the textarea with a variable 'text'. And this text will monitered throughout the page. 


//Before the function based component became popular, developers were using the class based components, and in the class based components the developers could easily change the state of the variable with the help of 'this.state' But when function based component became popular then react developed something called hooks. Now the state of the whole variable could be tracked over all the pages without the page being reloaded.

//So, in short react hooks allows us to use the features of class without the use of class. And react hook is one of the most important feature of updating the state of the variable live wihtout the refresh of the pages.


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

  function numberOfWords(){
    let arr = text.split(" ").filter((element)=>element.length!==0);
    return arr.length;
  }
  function numberOfCharacters(){
    return text.length;
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

  return (
    <>
    <div className='container'>
        <h1 style={{color : props.color}}>Enter the TEXT</h1>
        <div className="form-group" >            
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" style={{color : props.color==='black'?'black':'lightgreen', backgroundColor : props.color==='black'?'white':'black'}} rows="8"></textarea>
            {/* If inside this textarea, if we are not going to add this onChange method then we will not be able to add any change inside the text area. We will not be able to administer any change. */}
        </div>
        <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={fireOnClickUpper}>Convert to UPPERCASE</button>
        <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={fireOnClickLower}>Convert to LOWERCASE</button>
        <button  disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={fireOnClickSentenceCase}>Sentence Case</button>        
        <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={fireOnClickTitleCase}>Title Case</button>
        <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={fireOnClickCopy}>Copy Text</button>
        <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={fireOnClickRemoveExtraSpaces}>Remove Extra Spaces</button>
        <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={fireOnClickUndo}>Undo</button>
        <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={fireOnClickOriginal}>Original</button>
        <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={fireOnClickClear}>Clear</button>
    </div>
    <div className="container" style={{color : props.color}}>
      <h1 >Your Text Summary</h1>
      <p>{numberOfWords()+ " Words "+ numberOfCharacters() +" Characters "}</p>
    </div>
    <div className="container" style={{color : props.color}}>
      {/* This div tag is only possible because of the react hooks, since the changes on the text inside the textarea is being done, but since the hook is attatched to that variable, and this is why where ever we are using the same hook we are able to update the code without the page reload. This is the power of react hook. */}
      {preview()}
      {/* VERY IMPORTANT : This is the final html like syntax that is going to be sent over to the index.html to be rendered, and this is why if you have a conditional rendering like in this case we wanted to have no headline of 'Preview' if there is no text available, but if even one word is available then this would be a case of the conditional rendering, and this is why we do not do this conditional rendering here, we do all the conditional rendering in the function call . Let us go to the preview() method now ----*/} 
    </div>
    </>
  )
}




