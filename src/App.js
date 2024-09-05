import React, { useState } from "react";
import Nav from "./components/nav.jsx";
import TextForm from "./components/TextForm.jsx";
import Alert from "./components/Alert.jsx";
import About from "./components/About.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () =>{
  let[switchtext , setswitchtext] = useState('Enable Dark Mode');
  let[mode , setMode] = useState('light');
  const [alert, setalert] = useState(null);
  const setAlert = (message , type) => {
   setalert({
    type: type,
    msg: message
    } )
    setTimeout(()=>{
      setalert(null);
    }, 1700);
  }
  const Mode =()=>{
    if(mode==='light'){
      setMode('dark');
      setswitchtext('Enable Light Mode');
      document.body.style.backgroundColor= 'black';
      document.body.style.color = 'white';
      setAlert("Dark Mode has been enabled" , "info");
      document.title='WebCore-Dark';
    }
    else{
      setMode('light');
      setswitchtext('Enable Dark Mode');
      document.body.style.backgroundColor= "white";
      document.body.style.color = 'black';
      setAlert("Light Mode has been enabled" , "info");
      document.title='WebCore-Light';
    }
  }
  return(
    <div>
     <Router>
    <Nav title="WebCore" about="About" mode={mode} Mode={Mode} switchtext={switchtext}/>
    <Alert alert={alert} />
    <div className="container my-3">
    <Routes>
    <Route exact path="/about" element={<About mode={mode}/>} />
    <Route exact path="/" element={<TextForm setAlert={setAlert} heading="Enter the Text to analyze" /> } />
    </Routes>
    </div>
    </Router>
    </div>
  );
}

export default App;