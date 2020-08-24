import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler,
  NavbarBrand
} from "reactstrap";
import "./header.css";

class HeaderMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isOpenHeader: false,
      isTourOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleHeader = () => {
    this.setState({
      isOpenHeader: !this.state.isOpenHeader
    });
  };

  render() {
    return (
      <>
        <header className="header-fixed">
          <div className="header-container">
            <div className="main-max-width-container">
              <div className="headerFlex">
                <div className="leftSideContainer  ">
                  <div>
                    <a href="#/">
                      {" "}
                      <span className="tool-tip" tabindex="0" title="Resources">
                        {" "}
                        Resources
                        <span>
                          <span class="tooltiptext">Coming Soon...</span>
                        </span>
                      </span>
                    </a>
                  </div>
                  <div>
                    <a href="#/">
                      <span
                        className="tool-tip"
                        tabindex="0"
                        title="Need Assistance?"
                      >
                        {" "}
                        Need Assistance?
                        <span>
                          <span class="tooltiptext">Coming Soon...</span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>

                <div className="rightSideContainer  ">
                  <div className="messages" />
                  <div className="selectDropdown" />
                  <div>
                    <a
                      className="logout-btn"
                      tabindex="0"
                      title="logout"
                      onClick={this.logout}
                      href="#/"
                    >
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="menu-bar">
            <div className="main-max-width-container">
              <Navbar expand="lg" light>
                <Link to={"/"} aria-label="link to home page">
                  <NavbarBrand href="#" tabindex="0">
                    <img
                      src={require("../../assets/images/vcep_logo.png")}
                      className="left"
                      alt="home page logo"
                    />
                  </NavbarBrand>
                </Link>
                <NavbarToggler
                  onClick={this.toggle}
                  className="mt-4 menuButton"
                />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="HeaderPosition" navbar>
                    <NavItem
                      className="nav-item-space active"
                      tabindex="0"
                      title="Account Summary"
                    >
                      <NavLink href="#">Account Dashboard</NavLink>
                    </NavItem>

                    <NavItem className="nav-item-space">
                      <NavLink href="#">
                        <span
                          className="tool-tip"
                          tabindex="0"
                          title="Investments"
                        >
                          {" "}
                          Investments
                          <span>
                            <span class="tooltiptext">Coming Soon...</span>
                          </span>
                        </span>
                      </NavLink>
                    </NavItem>
                    <NavItem className="nav-item-space">
                      <NavLink href="#">
                        <span className="tool-tip" tabindex="0" title="Reports">
                          {" "}
                          Reports
                          <span>
                            <span class="tooltiptext">Coming Soon...</span>
                          </span>
                        </span>
                      </NavLink>
                    </NavItem>
                    <NavItem className="nav-profile">
                      <NavLink href="#">
                        <span className="tool-tip" tabindex="0" title="Profile">
                          {" "}
                          Profile
                          <span>
                            <span class="tooltiptext">Coming Soon...</span>
                          </span>
                        </span>
                      </NavLink>
                    </NavItem>

                    <NavItem className="hide-desktop">
                      <NavLink href="#">
                        <span
                          className="tool-tip"
                          tabindex="0"
                          title="Resources"
                        >
                          Resources
                          <span>
                            <span class="tooltiptext">Coming Soon...</span>
                          </span>
                        </span>
                      </NavLink>
                    </NavItem>
                    <NavItem className="hide-desktop">
                      <NavLink href="#">
                        <span
                          className="tool-tip"
                          tabindex="0"
                          title="Need Assistance?"
                        >
                          {" "}
                          Need Assistance?
                          <span>
                            <span class="tooltiptext">Coming Soon...</span>
                          </span>
                        </span>
                      </NavLink>
                    </NavItem>
                    <NavItem className="hide-desktop" />
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default HeaderMain;
