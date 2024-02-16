// import logo from './logo.svg';

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('dark');  // wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
setAlert(null);
    },1500);
  }

  const toggleMode = () => {
    if(mode === 'light')
      { setMode('dark')
      document.body.style.backgroundColor = "#B4B4B8";
      showAlert("dark mode has been enabled", "success");
      document.title = 'TextUtility - Dark Mode';
    }
    else
    { setMode('light')
    document.body.style.backgroundColor = "#E0F4FF"
    showAlert("light mode has been enabled", "success");
    document.title = 'TextUtility - Light Mode';
  }

  }

  return (
    <>
      <Navbar title = "TextUtility"  about_text = "About Us"  mode = {mode}  toggleMode={toggleMode}/>
      <Alert alert = {alert} />
      <div className='container'>
      <TextForm heading = "Text Analyser " mode = {mode}/>
      </div>
      
    </>
  );
}

export default App;
