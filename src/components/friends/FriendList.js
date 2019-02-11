import React, { Component } from 'react'
import FriendManager from "../../modules/FriendManager";

export default class FriendList extends Component {

    showFriends(id){

        FriendManager.getFriendsPractice(id)
        // .then(allPractices => {
        //     this.setState({
        //         friendsPractices: allPractices
        //     })
        //   })
    }


    render() {

        return (
            <div>
            <section className="friends">
            {
                this.props.friends.map(friend =>
                    <div id ={friend.userId} key={friend.userId}>
                    <h4>{friend.user.username}</h4>
                        <h5>{friend.user.age}</h5>
                        <h5>{friend.user.role}</h5>
                        <h6>{this.showFriends(friend.user.id)}</h6>

                    </div>,
                    // this.props.friendPractices.map(friendPractice =>
                    //     <p>{friendPractice.batters.runsScored}</p>
                    //     )
                )
            }
            </section>

            {/* <section className="practice">
            {
                this.friendsPractices.map(friendsPractice =>
                    <div key={friendsPractice.userId}></div>
                    )
            }
            </section> */}
            </div>
        );
    }
}