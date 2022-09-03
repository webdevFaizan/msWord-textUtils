import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');
  function abc(e){
    setText(e.target.value);
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
      // first=first.toUpperCase();
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

  return (
    <>
    <div className='container'>
        <h1 style={{color : props.color}}>Enter the TEXT</h1>
        <div className="form-group" >            
            <textarea className="form-control" value={text} onChange={abc} id="exampleFormControlTextarea1" style={{color : props.color==='black'?'black':'lightgreen', backgroundColor : props.color==='black'?'white':'black'}} rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={fireOnClickUpper}>Convert to UPPERCASE</button>
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
    </>
  )
}

