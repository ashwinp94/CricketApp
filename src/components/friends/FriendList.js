import React, { Component } from 'react'
import FriendManager from "../../modules/FriendManager";
import { Link } from 'react-router-dom'
import {Button} from 'reactstrap'
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
                        <Button  color="success" tag={Link}  className="addbutton1" to="/search">Add Friend</Button>
                        <section className="friends">
                            {
                                this.state.friends.map(friend =>
                                    <div id="card">
                                        <div className="card-body" id={friend.id} key={friend.user.id}>
                                            <h2>{friend.user.username}</h2>

                                            <Button tag={Link} color="warning" className="nav-link" to={`/friends/${friend.user.id}`}>Details</Button>
                                            <Button
                                            className="nav-link"
                                                color="danger"
                                                type="button"
                                                onClick={() => this.props.deleteFriend(friend.id)
                                                    .then(() => this.props.history.push("/friends"))}
                                                >Delete</Button>
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
