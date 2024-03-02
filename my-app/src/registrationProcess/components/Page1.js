import React, { useState } from "react"
import "../styles/page1.css"

export default function Page1(props) {
    return (
        <div className="userArea--fullName">
            <h2 className="fullName--title">Enter your full name</h2>
            <form onSubmit={props.handleSubmit} className="inputs--form">
                <input
                type="text" 
                className="FirstName--inputBox"
                placeholder="First Name"
                value={props.userData.firstName}
                onChange={props.handleChange}
                name="firstName"
                />
                <input 
                type="text" 
                className="LastName--inputBox"
                placeholder="Last Name"
                value={props.userData.lastName}
                onChange={props.handleChange}
                name="lastName"
                />
                <button>Submit</button>
            </form> 
        </div>
    )
}