import React, { useState } from "react"
import "../styles/collectData.css"
import Page1Comp from "./Page1.js"


export default function CollectingData() {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        descripation: "",
        image: ""
      })


    const [page, setPage] = useState(1)
    
    // console.log(page)

    function handleChange(event) {
        const {name, value} = event.target
        setUserData(prevUserData => {
            return {
            ...prevUserData,
            [name]: value 
            }
        })
    }


    function handleSubmit(event) {
        setPage(page < 3 ? page+1: "")
        event.preventDefault();
    }


    function currentRender() {
        if(page === 1) {
            return (
                <page1Comp 
                userData={userData}
                setUserData={setUserData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                />
            )
        }
        else {
            return (
                <h1>hello</h1>
            )
        }
    }


    return (
        <div className="root">
            <img src={require("../images/background.png")} className="backgroundImg" />
            <Page1Comp 
                userData={userData}
                setUserData={setUserData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <div className="ProgressBar">
                <span className="dot"></span>
                <spam className="dot"></spam>
                <spam className="dot"></spam>
            </div>
        </div>
    )
}