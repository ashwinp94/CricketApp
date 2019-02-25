import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import logo from "../images/official.png"
import "./NavBar.css"
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
                <Navbar id="" color="light"  >
                    <NavbarBrand href="/profile">Profile</NavbarBrand>
                    <Nav className="" >
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                            <DropdownItem>
                                <NavLink href="/bowlers">Bowling </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink href="/batters">Batting </NavLink>
                            </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="/events">Events</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="/friends">Friends</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <NavItem onClick={this.props.logOut} className="nav-item">
                            <NavLink href="/login">Sign Out</NavLink>
                        </NavItem>
                        <img id="image" src={logo} alt="Logo" width="30" height="35" margin-top="5px" />
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default NavBar
