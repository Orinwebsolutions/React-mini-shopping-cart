import React, { Component } from "react";

//stateless function components
const Navbar = ({totalCounter}) => {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar <span className="badge bg-secondary">{totalCounter}</span>
          </a>
        </div>
      </nav>
      );
}
 
export default Navbar;
