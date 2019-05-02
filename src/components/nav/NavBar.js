import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import logo from "../images/official.png"

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
    }
from 'reactstrap';


class NavBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div >
                <Navbar id="navbar" color="light"  expand="md">
                    <NavbarBrand left href="/profile">Profile</NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>

                            <NavItem>
                                <NavLink href="/batters">Batting </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/bowlers">Bowling </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/events">Events</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/friends">Friends</NavLink>
                            </NavItem>
                            <NavItem onClick={this.props.logOut} className="nav-item">
                                <NavLink href="/">Sign Out</NavLink>
                            </NavItem>
                            <img id="image"src={logo} alt="Logo" width="30" height="35" margin-top="5px"/>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavBar
