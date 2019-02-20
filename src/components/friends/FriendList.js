import React, { Component } from 'react'
import FriendManager from "../../modules/FriendManager";
import { Link } from 'react-router-dom'
import "./FriendList.css"

export default class FriendList extends Component {
    state = {
        friends: [],
    }
    componentDidMount() {

        FriendManager.getYourFriends(Number(sessionStorage.getItem("user")))
            .then(allFriends => {
                this.setState({
                    friends: allFriends
                })
            })
    }

    componentDidUpdate() {

        FriendManager.getYourFriends(Number(sessionStorage.getItem("user")))
            .then(allFriends => {
                this.setState({
                    friends: allFriends
                })
            })
    }


    render() {
        return (
            <React.Fragment>
                <div id="home">
                    <div>
                        <Link type="button" className="nav-link" to="/search">Add Friend</Link>
                        <section className="friends">
                            {
                                this.state.friends.map(friend =>
                                    <div id="card">
                                        <div className="card-body" id={friend.id} key={friend.user.id}>
                                            <h2>{friend.user.username}</h2>

                                            <Link className="nav-link" to={`/friends/${friend.user.id}`}>Details</Link>
                                            <button
                                                type="button"
                                                onClick={() => this.props.deleteFriend(friend.id)
                                                    .then(() => this.props.history.push("/friends"))}
                                                className="card-link">Delete</button>
                                        </div>
                                    </div>
                                )}
                        </section>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
