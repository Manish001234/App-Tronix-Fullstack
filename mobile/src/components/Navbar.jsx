import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import CartBtn from "../buttons/CartBtn";
// import Cart from "../buttons/Cart";


function Navbar({setLog,log}) {
  const user = JSON.parse(localStorage.getItem("app")) || null;
  const handlelog = () => {
    localStorage.removeItem("app");
    setLog(false)
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid py-3">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div style={{display: "flex",justifyContent: "space-between"}} className="collapse navbar-collapse" id="navbarSupportedContent">
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                  <Link className="nav-link" to="/">
                  <span className=""></span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/mobiles">
                  Mobile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/laptops">
                    Laptop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/Ipads">
                    Ipad
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <Link className="navbar-brand mc-Auto fw-bold" to="/">
              Apptronix-Store
              </Link>
            </div>
            <div style={{display:"flex",paddingRight:"50px"}}>
              {console.log(log)}
              {log ? 
              <button className="btn btn-outline-primary ms-2" onClick={() => handlelog()}>{user.name} Logout</button> : 
              <Link  to="/SignUp" className="btn btn-outline-primary ms-2">
                SignUp
              </Link>
              }
              
              <CartBtn></CartBtn>
            </div>
          </div>
      
        </div>
      </nav>
    </>
  );
}

export default Navbar;