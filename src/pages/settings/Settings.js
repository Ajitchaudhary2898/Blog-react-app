import React from "react";
import Sidebar from "../../sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form className="settingsForm">
          <label >Profile Picture</label>
          <div className="settingsPP">
            <img src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=" alt="" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
          </div>
          <label>Username</label>
          <input type="text"placeholder="ajit"/>
          <label>Email,</label>
          <input type="email"placeholder="ajit@gmail.com" />
          <label>Password</label>
          <input type="password"/>
          <button className="settingsSumbit">Update</button>
          
        </form>
      </div>
      <Sidebar />

    </div>
  )
}


