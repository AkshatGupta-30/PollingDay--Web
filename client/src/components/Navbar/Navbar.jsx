import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

class Navbar extends Component {
  pageRedirect = (index, content) => {
    // TODO: Side navigation drop down on links
    const className = index === parseInt(this.props.active ?? -1) ? "a active" : "a inactive";
    return (
      <li key={index}>
        <NavLink to={`/${content}`} className={className}>
          {String(content)}
        </NavLink>
      </li>
    );
  };

  renderNavItems = () => {
    const navItems = ["parties", "candidates", "voting", "results"];
    return (navItems.map((item, index) => this.pageRedirect(index, item)));
  }

  render() {
    // TODO: Handle click and pointer move of main-view
    return (
      <header>
        <input type="checkbox" id="menuToggle" />
        <div className="navbar">
          <div className="toggleMenu">
            <i className="bi bi-list"></i>
          </div>
          <NavLink to={"/"} className="logo">Polling Day</NavLink>
          <ul className="links">{this.renderNavItems()}</ul>
          <NavLink to={"/auth/register"} className="loginBtn" id="loginWide">Login</NavLink>
        </div>
        <div className="side-nav">
          <ul className="links">{this.renderNavItems()}</ul>
          <NavLink to={"/auth/register"} className="loginBtn" id="loginSmall">Login</NavLink>
        </div>
      </header>
    );
  }
}

export default Navbar;
