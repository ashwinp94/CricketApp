import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
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
                <Navbar color="light" light expand="md">
                    <NavbarBrand left href="/profile">Profile</NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown nav inNavbar left>
                                <DropdownToggle nav caret>
                                    Practices
                             </DropdownToggle>
                                <DropdownMenu left>
                                    <DropdownItem>
                                        <NavLink href="/batters">Batting Practice</NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink href="/bowlers">Bowling Practice</NavLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink href="/events">Events</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/friends">Friends</NavLink>
                            </NavItem>
                            <NavItem onClick={this.props.logOut} className="nav-item">
                                <NavLink href="/login">Sign Out</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavBar
