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
}

const handleExtraSpace = () =>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
}

    const [text, setText] = useState('Enter text here.');


  return (
    <>
<div className='container'>
<h4>{props.heading}</h4>
<div className="mb-3">

  <label for="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control" value={text} onChange = {handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className='btn btn-secondary mx-2' onClick={handleUpperCaseClick}>Convert to UpperCase</button>
<button className='btn btn-secondary mx-2' onClick={handleLowerCaseClick}>Convert to LowerCase</button>
<button className='btn btn-secondary mx-2' onClick={handleClearText}>Clear Text</button>
<button className='btn btn-secondary mx-2' onClick={handleCopyText}>Copy Text</button>
<button className='btn btn-secondary mx-2' onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
<div className='container my-2'>
<h6>Text Summary</h6>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <h6>Preview</h6>
    <p>{text}</p>
</div>
    </>
  )
}
