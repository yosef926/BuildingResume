import React from "react"
import "../styles/welcomePage.css"

export default function WelcomePage() {
    return (
        <div className="wholePage">
            <div className="welcomeLeft">
                <h1 className="welcomeLeft--title">Welcome back</h1>
                <h4 className="welcomeLeft--subTitle">Create your resume in just a few clicks</h4>
                <img src={require("../images/resumeImg.png")} className="welcomeLeft--img" />
            </div>
            <div className="welcomeRight">
                <h1 className="welcomeRight--title">Create resume in just a few minutes</h1>
            </div>
        </div>
    )
}