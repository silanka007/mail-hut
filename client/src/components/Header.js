import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import LogoImg from "../assets/img/logo.png";
import AddCredit from "./AddCredit";

export const Header = () => {
  const { auth } = useSelector((state) => state);

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
            <Fragment>
              <li>
                  <AddCredit />
              </li>
              <li>
              <a href="/v1/auth/logout">Logout</a>
            </li>
            </Fragment>
            
          )}
        </ul>
      </div>
    </nav>
  );
};
