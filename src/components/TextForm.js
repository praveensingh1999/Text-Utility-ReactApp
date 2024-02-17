import React, {useState} from 'react'

export default function TextForm(props) {
    const handleOnChange = (event)=>{
        setText(event.target.value.replace('Enter text here.',''));
    }

    const handleUpperCaseClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const handleLowerCaseClick = () => {
          let newtext =text.toLowerCase();
          setText(newtext)
    }

    const handleClearText = () => {
        let newtext = "";
        setText(newtext);
    }

const handleCopyText = () => {
    var newtext = document.getElementById("exampleFormControlTextarea1");
    newtext.select();
    navigator.clipboard.writeText(newtext.value);
    document.getSelection().removeAllRanges();
    
}

const handleExtraSpace = () =>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
}

    const [text, setText] = useState('Enter text here.');


  return (
    <>
<div className='container'  >
<h4>{props.heading}</h4>
<div className="mb-3">

  <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control" value={text} onChange = {handleOnChange} style={{backgroundColor : props.mode==="dark" ? 'beige': "#E3F4F4"}} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button disabled={text.length===0} className='btn btn-success mx-2 my-2' onClick={handleUpperCaseClick}>Convert to UpperCase</button>
<button disabled={text.length===0} className='btn btn-success mx-2 my-2' onClick={handleLowerCaseClick}>Convert to LowerCase</button>
<button disabled={text.length===0} className='btn btn-success mx-2 my-2' onClick={handleClearText}>Clear Text</button>
<button disabled={text.length===0} className='btn btn-success mx-2 my-2' onClick={handleCopyText}>Copy Text</button>
<button disabled={text.length===0} className='btn btn-success mx-2 my-2' onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
<div className='container my-2'>
<h6>Text Summary</h6>
    <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
    <h6>Preview</h6>
    <p>{text}</p>
</div>
    </>
  )
}
