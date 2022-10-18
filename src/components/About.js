import React, { useState } from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color: "black",
        backgroundColor: "white",
    });

    const [btnText, setBtnText] = useState("Enable dark Mode");
    const [colorClass, setColorClass] = useState("dark");

    const applyStyles = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: "white",
                backgroundColor: "black",
            })
            setBtnText("Enable Light Mode");
            setColorClass("black");
        }
        else {
            setMyStyle({
                color: "black",
                backgroundColor: "white",
            })
            setBtnText("Enable Dark Mode");
            setColorClass("black");
        }
    }

    return (
        <>
            <main style={myStyle}>
                <div className="container py-4"  style={myStyle} >
                    <div className="container">
                        <button type="button" class="btn btn-primary" onClick={applyStyles}>{btnText}</button>
                    </div>
                    <h1>About Us</h1>

                    <div className="p-5 mb-4 bg-{colorClass} border rounded-3" style={myStyle}>
                        <div className="container-fluid py-5 rounded-3" style={myStyle}>
                            <h3 className="display-5 fw-bold">Varaliya's TextUtils.com</h3>
                            <p className="col-md-8 fs-4">Text-Utils is a web tool to assist developers and other people in daily tasks by providing tools for manipulating text data. This tool include <b> Remove Punctuations, UPPERCASE, New Line Remove, Numbers Remover, and Extra Spaces Remover</b>, and many other tools to handle text.</p>
                        </div>
                    </div>

                    <div className="row align-items-md-stretch">
                        <div className="col-md-6">
                            <div className="h-100 p-5 text-bg-dark rounded-3">
                                <h2>About Me</h2>
                                <p>Love myself I do. Not everything, but I love the good as well as the bad. I love my crazy lifestyle, and I love my hard discipline. I love my freedom of speech and the way my eyes get dark when I'm tired. I love that I have learned to trust people with my heart, even if it will get broken. I am proud of everything that I am and will become.</p>
                                <button className="btn btn-outline-light" type="button">Learn more...</button>
                            </div>
                        </div>
                        <div className="col-md-6" style={myStyle}>
                            <div className="h-100 p-5 bg-{colorClass} border rounded-3" style={myStyle}>
                                <h3 style={myStyle}><br /><br /> <i> "If you want to increase your success rate, double your failure rate." </i></h3>
                            </div>
                        </div>
                    </div>

                    <footer className="pt-3 mt-4 border-top" style={myStyle}>
                        © 2022
                    </footer>
                </div>
            </main>
        </>
    )
}
