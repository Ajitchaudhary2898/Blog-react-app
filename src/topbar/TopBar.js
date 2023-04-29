import React from "react";
import "./topbar.css"
import { Link } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

export default function TopBar() {
  const user = false;
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const {  isAuthenticated } = useAuth0();

  return (

    <div className='top'>
      <div className="topleft">

        <i className="topIcon fa-brands fa-linkedin"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-facebook"></i>
      </div>

      <div className="topcenter">
        <ul className="topList">
          <li className="topListItem"><Link to={"/"}>HOME</Link> </li>
          <li className="topListItem"><Link to={"/write"}>WRITE</Link></li>
          <li className="topListItem"><Link to={"/contact"}>CONTACT</Link> </li>
          <li className="topListItem"> <Link to={"/about"}>LOGOUT</Link> </li>


          <li className="topListItem">
            {/* {user && "LOGOUT"} */}
          </li>

        </ul>
      </div>

      <div className="topright">
        {
          user ? (
            <img className="imgItem" src=" https://clipground.com/images/logo-blog-7.png " alt="" />


          ) : (<ul className="topList">
            <li className="topListItem">
        {
                isAuthenticated ? <li>
                  <button onClick={() => logout({ logoutParams: { returnTo: window.location.login } })}>
                Log Out
              </button>
                </li>
                :(
                  <li>
                    <button onClick={() => loginWithRedirect()}>Log In</button>
                  </li>
                )
              }

              {/* <button onClick={() => loginWithRedirect()}>Log In</button>

              // <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              //   Log Out
              // </button> */}
              {/* <Link to={"/login"}>LOGIN</Link>
            </li>
            <li className="topListItem">
            <Link to={"/register"}>REGISTER</Link> */}

            </li>
          </ul>
          )
        }
        <i class="topSearchicon fa-solid fa-magnifying-glass"></i>

      </div>
      {/* <Link to ="/login">LOGIN</Link> */}
    </div>
  )
}


