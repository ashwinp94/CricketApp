import React, { Component } from 'react'
import "./ProfilePage.css"
import {Button} from "reactstrap"
import { Link } from 'react-router-dom'

export default class ProfilePage extends Component {

    render() {
        return (
            <React.Fragment>
                <div id="home">
                    <div>
                        <Button color="success" tag={Link} className="addbutton1" to="/search">Add Friend</Button>
                        <section className="friends">

                            <div id="card">
                                <div  className="card-body"
                                    id="card-body"
                                    key={this.props.currentUser.id}>


                                    <h2>{this.props.currentUser.username}</h2>
                                    <h2>{this.props.currentUser.role}</h2>
                                    <h2>{this.props.currentUser.age}</h2>
                                    <Button color ="success" tag={Link} className="nav-link" to={`/profile/${this.props.currentUser.id}/edit`}>Edit Info</Button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}