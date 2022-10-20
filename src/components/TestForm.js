import React, { useState } from 'react'
import Alert from './Alert';
import "./App.css"

export default function TestForm(props) {

    document.title = "TextUtils - Home";

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

    const handleUpCapitalizeCase = () => {
        const words = text.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
        setText(words);
        showAlert("Capitalized the first letter of each words!", "success");
    }

    const handleUpTitleCase = () => {
        const words = text.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
        setText(words);
        showAlert("Capitalized the first letter of each words!", "success");
    }

    const handleUpNewLine = () => {
        const regex = /[\r\n]{2,}/gm;
        const result = text.replace(regex, '\n');
        setText(result);
        showAlert("New line removed!", "success");
    }

    const handleUpExtraSpace = () => {
        const result = text.split(/[ ]+/);
        setText(result.join(" "))
        showAlert("Extra spaces removed!", "success");
    }

    const handleUpNumberRemove = () => {
        const regex = /[0-9]/g;
        const result = text.replace(regex, '');
        setText(result);
        showAlert("Number removed!", "success");
    }

    const handleUpClearText = () => {
        const result = text.replace(text, '');
        setText(result);
        showAlert("Texts Cleared!", "success");
    }

    const handleUpCopyText = () => {
        navigator.clipboard.writeText(text);
        showAlert("Copied to Clipboard!", "success");
        setCopy("Copied");
    }

    const handleUpCopyTextArea = () => {
        navigator.clipboard.writeText(text);
        setCopy("Copied");
    }

    const handleUpSentenceCase = () => {
        var newString = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()});
        setText(newString);
        showAlert("Converted to sentence case!", "success");
    }

    const handleUpNonAlpha = () => {
        const newString = text.replace(/[^a-z0-9]/gi, '');
        setText(newString);
        showAlert("Removed all non-alphanumeric Characters!", "success");
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
    const [copyToClipboard, setCopy] = useState("Click To Copy");

    return (
        <>
            <div className="container my-4" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2 className='mb-2'>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#002f5e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="12"></textarea>
                    <Alert alert={alert} />
                </div>
                <button disabled={text.length===0} className="btn btn-primary btn-sm mx-2 my-2" onClick={handleUpUppercase}>Convert To Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary btn-sm  my-2" onClick={handleUpLower}>Convert To Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary btn-sm mx-2  my-2" onClick={handleUpPunctuations}>Remove Punctuations</button>
                <button disabled={text.length===0} className="btn btn-primary btn-sm  my-2" onClick={handleUpCapitalizeCase}>Capitalize Case</button>
                <button disabled={text.length===0} className="btn btn-primary btn-sm mx-2  my-2" onClick={handleUpNewLine}>Remove New Line</button>
                <button disabled={text.length===0} className="btn btn-primary btn-sm  my-2" onClick={handleUpExtraSpace}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-primary btn-sm mx-2  my-2" onClick={handleUpNumberRemove}>Remove Numbers</button>
                <button disabled={text.length===0} className="btn btn-primary btn-sm my-2" onClick={handleUpClearText}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary btn-sm mx-2  my-2" onClick={handleUpCopyText}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary btn-sm my-2" onClick={handleUpTitleCase}>Title Case</button>
                <button disabled={text.length===0} className="btn btn-primary btn-sm mx-2 my-2" onClick={handleUpSentenceCase}>Sentence Case</button>
                <button disabled={text.length===0} className="btn btn-primary btn-sm my-2" onClick={handleUpNonAlpha}>Remove Non-Alphanumeric</button>
            </div>

            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your text summary</h2>
                <br />
                <p>character Count: {text.length} | Word Count: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
                <br />
                <h2>Preview</h2>

                    <div className={`bg-${props.mode==='light'?'light':'dark'} p-5 rounded`} style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                        <button className='btn' id='copyBtn-clipboard' onClick={handleUpCopyTextArea} style={{ color: props.mode === 'dark' ? 'white' : 'black'}}><img className='copyImg' src="https://cdn-icons-png.flaticon.com/512/3073/3073464.png"
                            title={copyToClipboard} alt='copy'
                        /><br /><p id='copyTextMsge'>{copyToClipboard}</p></button>
                        <pre>
                        <p><br />{text.length > 0 ? text : "Oppps! Nothing to preview."}</p>
                        </pre>
                    </div>

            </div>
            <footer className="pt-2 mt-4 mx-5 border-top rounded-2" style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}}>
                        © 2022 TextUtils-ReactApp.in
                    </footer>
        </>
    )
}
