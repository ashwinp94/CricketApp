import React, { Component } from 'react'

import {Link} from 'react-router-dom'

export default class ProfilePage extends Component {

    render() {
        return (
            <React.Fragment>
                <div id="home">
            <div>
            <Link type="button" className="nav-link" to="/search">Add Friend</Link>
            <section className="friends">

                <div id = "card">
                    <div className="card-body"
                        id ={this.props.currentUser.id}
                        key={this.props.currentUser.id}>
                        <Link className="nav link" to={`/profile/${this.props.currentUser.id}/edit`}>Edit</Link>
                        <h2>{this.props.currentUser.username}</h2>
                        <h2>{this.props.currentUser.role}</h2>
                        <h2>{this.props.currentUser.age}</h2>
                    </div>
                </div>
            </section>
            </div>
                        </div>
            </React.Fragment>
        );
    }
}