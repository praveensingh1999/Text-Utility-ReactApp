import React from 'react'

export default function About(props) {
     let myStyle = {
        color: props.mode === 'dark'?'white':'orange',
        backgroundColor: props.mode === 'dark'?'violet':'green',
        
     }

  return (
    <div className='container' style={myStyle}>
      <h3>Analyze Your text</h3>
      <p>TextUitility gives you a way to analyze your quickly and efficiently. Be it word count, character count or</p>
      <h3>Free to use</h3>
      <p>TextUtility is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtility reports the
      number of words and characters. Thus it is suitable for writting text with word/ character limit.</p>
      <h3>Browser Compatible</h3>
      <p>This word counter software works in any web browser such as chrome, Firefox,
      Internet Explorer, Safari, Opera. It suits to ciunt characters in facebook, blog, books, excel document, pdf document, essays, etc.</p>
    </div>
  )
}
