import React from "react";
import { Link } from "react-router-dom";
import "./contact.css";


export default function Contact() {
    return (

        <div className="contact">
            <span className="contactTitle">Contact Us!</span>
            <form className="contactrForm">
        <label>Name</label>
        <br></br>
        <br></br>
        <input className="contactInput" type="text" placeholder="Enter your username..." />
        <br></br>
        <br></br>
        <label>Email</label>
        <br></br>
        <br></br>
        <input className="contactInput" type="text" placeholder="Enter your email..." />
        <br></br>
        <br></br>
        <label>Phone Number</label>
        <br></br>
        <br></br>
        <input className="contactInput" type="number" placeholder="91+..." />
        <br></br>
        <br></br>
        <label>your problem</label>
        <br></br>
        <br></br>
        <input className="contactInput" type="text" placeholder="Describe your problem" />
        <br></br>
        <br></br>
        <button className="contactButton">
        Send me
        </button>
      </form>
        


        </div>

    )
}