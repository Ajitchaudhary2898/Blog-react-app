import React from "react";
import { Link } from "react-router-dom";
import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img className="writeImg" src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none" }} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea type="text" className="writeText" placeholder="Write Down Your Story ....">

                    </textarea>
                </div>
                <button className="writeSumbit">Publish</button>
            </form>
        </div>
    )
}
