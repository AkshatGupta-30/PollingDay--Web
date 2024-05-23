import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

class Navbar extends Component {
  pageRedirect = (index, content) => {
    // TODO: Side navigation drop down on links
    const className = index === parseInt(this.props.active ?? -1) ? "active" : "inactive";
    return (
      <li key={index}>
        <NavLink to={`/${content}`} className={className}>
          {content}
        </NavLink>
      </li>
    );
  };

  renderNavItems = () => {
    const navItems = ["Parties", "Candidates", "Voting", "Results"];
    return (navItems.map((item, index) => this.pageRedirect(index, item)));
  }

  render() {
    // TODO: Handle click and pointer move of main-view
    return (
      <div id="header">
        <input type="checkbox" id="menuToggle" />
        <div className="navbar">
          <div className="logo">
            <div className="toggleMenu">
              <i className="bi bi-list"></i>
            </div>
            <NavLink to={"/"}>Polling Day</NavLink>
          </div>
          <ul className="links">{this.renderNavItems()}</ul>
        </div>
        <div className="side-nav">
        <ul className="links">{this.renderNavItems()}</ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
