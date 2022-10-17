import React, {useState} from 'react'


export default function TestForm(props) {
    const handleUpClick = () => {
        console.log("Analyze button clicked");
        let upperText = text.toUpperCase();
        setText(upperText);
    }

    const handleOnChange = (event) => {
        console.log("On Change")
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className="container my-4">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="12"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Analyze</button>
            </div>
        </>
    )
}
