import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import LogoImg from "../assets/img/logo.png";

export const Header = () => {
  const { auth } = useSelector((state) => state);
  console.log({auth})

  return (
    <nav style={{ background: "#00BAAD" }}>
      <div className="nav-wrapper container">
        <Link to="/" className="left brand-logo">
          <img src={LogoImg} alt="" style={{ height: "60px" }} />
        </Link>
        <ul id="nav-mobile" className="right ">
          {auth === null ? (
            <li>Loading...</li>
          ) : auth === false ? (
            <li>
              <a href="/v1/auth/google">Signin with Google+</a>
            </li>
          ) : (
            <li>
              <a href="/v1/auth/logout">Logout</a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
