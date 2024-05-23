import React, { Component } from "react";
import "../css/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div id="header">
        <input type="checkbox" id="menuToggle" />
        <div className="navbar">
          <div className="logo">
            <div className="toggleMenu">
              <i className="bi bi-list"></i>
            </div>
            <a href=".">Polling Day</a>
          </div>
          <ul className="links">
            <li>
              <a href="." className="inactive">
                Parties
              </a>
            </li>
            <li>
              <a href="." className="inactive">
                Candidates
              </a>
            </li>
            {/* //TODO : Add Links to Items */}
            <li>
              <a href="." className="inactive">
                Voting
              </a>
            </li>
            <li>
              <a href="." className="inactive">
                Results
              </a>
            </li>
          </ul>
        </div>
        <div className="side-nav">
          <ul className="links">
            {/* //TODO: Side navigation drop down on links */}
            <a href="." className="inactive">
              Parties
            </a>
            {/* //TODO: Side navigation drop down on links */}
            <a href="." className="inactive">
              Candidates
            </a>
            {/* //TODO : Add Links to Items */}
            <a href="." className="inactive">
              Voting
            </a>
            <a href="." className="inactive">
              Results
            </a>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
