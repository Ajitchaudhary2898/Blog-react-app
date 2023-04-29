import React from "react";
import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Us</span>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO-hlLa1mnf2V1p__dFMxkNjf44wHphOxH2g&usqp=CAU" alt="" />
                <p>
                    Hello, Every one its a Small Introduction about our selfs<hr></hr>
                    we are pursuning B-tec from <b>GLA UNIVERSITY , MATHURA</b> in Computer Science 
                    my name is - Ajit chaudhary and other member is Ravi Kumar we both devloped this site

                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATAGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>

                </ul>

            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW ME</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-linkedin"></i>
                    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                    <i className="sidebarIcon fa-brands fa-facebook"></i>
                </div>
            </div>
        </div>
    )
}
