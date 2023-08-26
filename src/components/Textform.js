import React, {useState}from 'react'

export default function Textform(props) {
  const handleUpclick = () =>{
    
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!","success");
  }

  const handleLoclick = () =>{
    
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!","success");
  }

  
  const handleClclick = () =>{
    
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared","success");
  }

  const handleOnChange = (event) =>{
    setText(event.target.value);
  }

  const handleCopy = ()=>{
    let text = document.getElementById("myBox");
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied To Clipboard!","success");
  }

  const handleExtraSapces = ()=>{
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "));
    props.showAlert("Extra space removed!","success");
  }

  const [text, setText] = useState("");

  // const [count, setCount] = useState(0)

  // const textCount = (str)=>{
  //   let cnt = 0;
  //   for(let i = 0; i<str.length; i++){
  //     if(str[i]==' ')cnt++;
  //   }
  //   setCount(str.length-cnt)
  // }


  return (
    <>
    <div className='containe' style={{ color : props.mode === 'dark'?'white':'black'} } >
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control "  value = {text} onChange={handleOnChange} style={{ backgroundColor : props.mode === 'dark'?'#343a3f':'white' ,  color : props.mode === 'dark'?'white':'black'} } id="myBox" rows="8"></textarea>
        </div>
        <button className="  btn btn-primary mx-2" onClick={handleUpclick} >Convert to Uppercase</button>
        <button className="  btn btn-primary mx-2" onClick={handleLoclick} >Convert to Lowercase</button>       
        <button className="  btn btn-primary mx-2" onClick={handleClclick} >Clear</button>       
        <button className="  btn btn-primary mx-2" onClick={handleCopy} >Copy</button>       
        <button className="  btn btn-primary mx-2" onClick={handleExtraSapces} >Remove Extra Spaces</button>       
    </div>
    <div className="containe my-3" style={{ color : props.mode === 'dark'?'white':'black'} } >
      <h2> Your Text Summary</h2>
      <p> {text.split(" ").length-1} words and {text.length} charcters</p>
      <p> {.008*(text.split(" ").length -1)} Minutes read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something in Textbox to preview "}</p>
    </div>
    </>
  )
}
