import React, { useState } from 'react'
import Alert from './Alert';
import "./App.css"

export default function TestForm(props) {

    let textarea = {
        backgroundColor: 'rgba(0,0,0,.1)',
        overflowY: 'scroll',
        height: '300px',
        padding: "30px",
        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        webkitBoxShadow: '#0066ff 0px 0px 6px inset',
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#01007e',
            outline: '1px solid slategrey'
        },
        webkitBorderRadius: '20px',
        mozBorderRadius: '20px',
        borderRadius: "20px",
    }
    const handleUpUppercase = () => {
        let upperText = text.toUpperCase();
        setText(upperText);
        showAlert("Converted to uppercase!", "success");
    }

    const handleUpPunctuations = () => {
        const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
        const result = text.replace(regex, '');
        setText(result)
        showAlert("Punctuations removed!", "success");
    }

    const handleUpLower = () => {
        let LoweText = text.toLocaleLowerCase();
        setText(LoweText);
        showAlert("Converted to lowercase!", "success");
    }

    const handleUpNewLine = () => {
        const regex = /\n/g;
        const result = text.replace(regex, '');
        setText(result);
        showAlert("New line removed!", "success");
    }

    const handleUpExtraSpace = () => {
        const result = text.split(/[ ]+/);
        setText(result.join(" "))
        showAlert("Extra spaces removed!", "success");
    }

    const handleUpClearText = () => {
        const result = text.replace(text, '');
        setText(result);
        showAlert("Texts Cleared!", "success");
    }

    const handleUpCopyText = () => {
        let copyText = document.getElementById('myBox');
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        showAlert("Copied to Clipboard!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        });
        setTimeout(() => {
            setAlert(null);
        }, 1500);

    }

    const [text, setText] = useState("");
    const [alert, setAlert] = useState(null);

    return (
        <>
            <div className="container my-4" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#002f5e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="12"></textarea>
                    <Alert alert={alert} />
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpUppercase}>Convert To Uppercase</button>
                <button className="btn btn-primary" onClick={handleUpLower}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleUpPunctuations}>Remove Punctuations</button>
                <button className="btn btn-primary" onClick={handleUpNewLine}>Remove New Line</button>
                <button className="btn btn-primary mx-2" onClick={handleUpExtraSpace}>Remove Extra Spaces</button>
                <button className="btn btn-primary" onClick={handleUpClearText}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleUpCopyText}>Copy Text</button>
            </div>

            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your text summary</h2>
                <br />
                <p>character Count: {text.length} | Word Count: {text.length > 0 ? text.split(" ").length : "0"}</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <br />
                <h2>Preview</h2>
                
                <pre style={textarea}>
                    <p><br />{text.length > 0 ? text : "Enter something in the TextBox above to preview it here."}</p>
                </pre>
                
            </div>
        </>
    )
}
