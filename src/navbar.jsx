import React, { Component } from "react";

const Navbar = (props) => {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar <span className="badge bg-secondary">{props.totalCounter}</span>
          </a>
        </div>
      </nav>
      );
}
 
export default Navbar;
