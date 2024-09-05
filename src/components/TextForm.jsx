import React, {useState} from 'react';

export default function TextForm(props) {
    const mystyle = {
        height: "35px" ,
        border: "none" , 
        marginLeft: "20px"
    }
    const mystyle2={
        width: "100%" ,
        padding: "20px",
    }

    const[text, setText] = useState('');
    const handleUp = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.setAlert("Converted to Upper Case" , "success");
    }
    const handleLow = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.setAlert("Converted to Lower Case" , "success");

    }
    const handleRepeat = () => {
        let newText = text.repeat(4);
        setText(newText);
        props.setAlert("Text Repeated 4 times Successfully" , "success");

    }
    const handleClear = () => {
        let newText = ("");
        setText(newText);
        props.setAlert("Text Cleared" , "danger");

    }
    const handleChange = (event) => {
        setText(event.target.value);
    }
  return (
    <div className="mb-3" style={mystyle2}>
    <div style={{marginTop: "50px", margin: "30px", textAlign: "center"}}>
        <h1>{props.heading}</h1>
        <textarea className='text' value={text} onChange={handleChange}
        id='textbox' rows="8" style={mystyle2}></textarea><br></br>
    </div>
    <div style={mystyle2}>
    <button className="btn btn-success my-1" disabled={text.length===0} onClick={handleUp} style={mystyle}>Convert to UpperCase</button>
    <button className="btn btn-success my-1" disabled={text.length===0} onClick={handleLow} style={mystyle}>Convert to LowerCase</button>
    <button className="btn btn-success my-1" disabled={text.length===0} onClick={handleRepeat} style={mystyle}>Repeat the Text</button>
    <button className="btn btn-dark my-1" disabled={text.length===0} onClick={handleClear} style={mystyle}>Clear</button>
    </div>
    <div className='container my-3' style={mystyle2}>
        <h1>Text Summary</h1>
        <p>Yout text has {text.split(/\s+/).filter((word)=>{return word.length!==0}).length}words and {text.length}characters</p>
        <p>You can read the above text in {0.008 * text.split(" ").filter((word1)=>{return word1.length!==0}).length} minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview here! "}</p>
    </div>

    


    </div>
  )
}
