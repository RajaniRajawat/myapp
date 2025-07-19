import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    console.log("UpperCase was clicked: " + text);
    setText(text.toUpperCase());
    props.showAlert("converted  to uppercase!","success");
  };

  const handleLoClick = () => {
    console.log("LowerCase was clicked: " + text);
    setText(text.toLowerCase());
     props.showAlert("converted  to lowercase!","success");
  };

  const handleClearClick = () => {
    console.log("Clear was clicked");
    setText('');
     props.showAlert("text cleared!","success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    const textArea = document.getElementById("myBox");
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
    document.getSelection().removeAllRanges();
    console.log("Text copied to clipboard");
     props.showAlert("copied  to clipboard!","success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
     props.showAlert("extra spaces removed!","success");
  };

  return (
    <>
      <div
        className="container my-4"
        style={{
          backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
          color: props.mode === 'dark' ? 'white' : '#042743'
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
              color: props.mode === 'dark' ? 'white' : '#042743'
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
          color: props.mode === 'dark' ? 'white' : '#042743'
        }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {
            text.trim().split(/\s+/).filter((word) => word.length !== 0).length
          }{' '}
          words and {text.length} characters
        </p>
        <p>
          {
            0.008 *
            text.trim().split(/\s+/).filter((word) => word.length !== 0).length
          }{' '}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter something to preview it here.'}</p>
      </div>
    </>
  );
}
