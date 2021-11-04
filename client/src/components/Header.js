import React from 'react'
import {Link} from "react-router-dom"
import LogoImg from "../assets/img/logo.png"

export const Header = () => {
  return (
    <nav style={{background: "#00BAAD"}}>
    <div className="nav-wrapper container">
      <Link to="/" className="left brand-logo">
        <img src={LogoImg} alt="" style={{height: "60px"}} />
      </Link>
      <ul id="nav-mobile" className="right ">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
  )
}
