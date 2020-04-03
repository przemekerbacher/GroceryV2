import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <nav className="main">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/promotions">
                  promotions
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/delivery">
                  delivery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cooperation">
                  cooperation
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/faq">
                  faq
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
