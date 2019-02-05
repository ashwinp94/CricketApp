import React, { Component } from "react"
import { Link } from "react-router-dom"
import SearchInput from '../search/SearchInput'


class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="nav-link" to="/batters">Batting Practice</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/bowlers">Bowling Practice</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/friends">Your Friends</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/friends">Find Friends</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/events">Events</Link>
                    </li>
                    <li>
                        <SearchInput {...this.props}/>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar
