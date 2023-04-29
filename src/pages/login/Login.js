import React from "react";
import { Link } from "react-router-dom";
import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label  className="labelCL">Email</label>
                <input type="email" className="loginInput" placeholder="Enter Your Email..@gmail.com " />
                <label className="labelCL">Password</label>
                <input type="password" className="loginInput" placeholder=" Enter Your Password " />
                <button className="loginButton">Login</button>

            </form>
            <button className="loginRegisterButton">
                <Link className="link" to={"/register"}>Register</Link>
            </button>
        </div>
    )
}
