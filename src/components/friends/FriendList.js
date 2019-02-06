import React, { Component } from 'react'



componentDidMount() {
    BatterManager.getYourBatters(this.state.userId).then(allBatters => {
      this.setState({
        batters: allBatters
      });
    });
}
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