// import logo from './logo.svg';

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'

function App() {
  const [mode, setMode] = useState('dark');  // wheather dark mode is enabled or not
  
  const toggleMode = () => {
    if(mode === 'light')
      { setMode('dark')
      document.body.style.backgroundColor = "#B4B4B8";
    }
    else
    { setMode('light')
    document.body.style.backgroundColor = "#E0F4FF"
  }

  }

  return (
    <>
      <Navbar title = "TextUtility"  about_text = "About Us"  mode = {mode}  toggleMode={toggleMode}/>
      <div className='container'>
      <TextForm heading = "Text Analyser " mode = {mode}/>
      </div>
      
    </>
  );
}

export default App;
