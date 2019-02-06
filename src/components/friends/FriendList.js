import React, { Component } from 'react'
import FriendManager from "../../modules/FriendManager";




export default class FriendList extends Component {
    state= {
        friendsPractices: [],
        friends: [],
        userId: Number(sessionStorage.getItem("user"))
    }

    componentDidMount() {
        FriendManager.getFriendsPractice(this.state.userId).then(friend => {
            this.setState({
                friends: friend
            });
          });

        FriendManager.getFriendsPractice(friend.user.id).then(friendP => {
          this.setState({
            friendsPractices: friendP
          });
        });
    }
    render() {
        return (
            <section className="friends">
            {
                this.props.friends.map(friend =>
                    <div id ={friend.userId} key={friend.userId}>
                    <h4>{friend.user.username}</h4>
                        <h5>{friend.user.age}</h5>
                        <h5>{friend.user.role}</h5>
                        <p>{friend.user.id}</p>
                    </div>,
                    // this.props.friendPractices.map(friendPractice =>
                    //     <p>{friendPractice.batters.runsScored}</p>
                    //     )
                )
            }
            </section>
        );
    }
}