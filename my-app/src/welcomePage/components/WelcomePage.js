import React from "react";
import "../styles/welcomePage.css";
import { useNavigate } from "react-router-dom";


export default function WelcomePage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/register");
  }

  return (
    <div className="wholePage">
      <div className="welcomeLeft">
        <h1 className="welcomeLeft--title">Welcome back</h1>
        <h4 className="welcomeLeft--subTitle">Create your resume in just a few clicks</h4>
        <img src={require("../images/resumeImg.png")} className="welcomeLeft--img" alt="resume" />
      </div>
      <div className="welcomeRight">
        <h2 className="welcomeRight--title">Create resume in just a <br/>few minutes</h2>
        <button className="button" onClick={handleClick}>START NOW</button>
      </div>
    </div>
  );
}
