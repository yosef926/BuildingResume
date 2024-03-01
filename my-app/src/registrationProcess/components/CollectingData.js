import React from "react"
import "../styles/collectData.css"


export default function CollectingData(props) {

    function handleSumbit() {
        console.log("hello world")
    }


    return (
        <div className="root">
            <img src={require("../images/background.png")} className="backgroundImg" />
            <div className="userArea">
                <h2>Enter your full name</h2>
                <form onSubmit={handleSumbit}>
                    <input
                    type="text" 
                    className="FirstName--inputBox"
                    placeholder="First Name"
                    />
                    <input 
                    type="text" 
                    className="LastName--inputBox"
                    placeholder="Last Name"
                    />
                </form>
            </div>
        </div>
    )
}



// trying to understand how to keep the quality of the photo the same when im resizing it(height, width: 100%)