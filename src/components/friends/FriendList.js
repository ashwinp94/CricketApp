import React, { Component } from 'react'


export default class FriendList extends Component {
    render() {
        return (
            <section className="friends">
            {
                this.props.friends.map(friend =>
                    <div id ={friend.userId} key={friend.userId}>
                    <h4>{friend.user.username}</h4>
                        <h5>{friend.user.age}</h5>
                        <h5>{friend.user.role}</h5>
                    </div>
                )
            }
            </section>
        );
    }
}