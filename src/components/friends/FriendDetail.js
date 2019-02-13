import React, { Component } from "react"
import {Link} from "react-router-dom"
import FriendManager from "../../modules/FriendManager"
import "./FriendDetail.css"
export default class FriendDetail extends Component {

    state = {
    friendsPractices: []
}


showFriends(){

    let friendsData = [];
    FriendManager.getFriendsPractice(this.props.match.params.id)
        .then(allPractices => {
            friendsData.push(allPractices)
        })

        this.setState({
            friendsPractices: friendsData
    });
}

componentDidMount(){
    this.showFriends();
}

    render() {
        /*
            Using the route parameter, find the animal that the
            componentDidMount(){
                FriendManager.getFriendsPractice(friendId)
                .then(allPractices => {
                    this.setState({
                        friendsPractices: allPractices
                    })
                  })
            }
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const friend = this.state.friendsPractices.filter(o => o.id === parseInt(this.props.match.params.id))
        console.log(friend)

        return (
            <section className="friend">
            {
                friend.map(friend =>
                <div key={friend.id} className="card">
                    <h5>{friend.username}</h5>
                    <h5>{friend.age}</h5>
                    <h5>{friend.role}</h5>
                    <h5>{friend.username}'s Practices</h5>
                    <div>
                    {
                        friend.batters.map(bat =>
                        <section key = {bat.id} id= "battingSection">
                        <h5>{bat.batDate}</h5>
                        <h5>{"Runs Scored:"}{bat.runsScored}</h5>
                        <h5>{"Balls Faced:"}{bat.ballsFaced}</h5>
                        <h5>{"# of 4's:"}{bat.numberofFours}</h5>
                        <h5>{"# of 6's:"}{bat.numberofSixes}</h5>
                        </section>
                    )}
                    </div>
                    <div className="card-body">
                    <Link className="nav-link" to={`/friends`}>Go Back </Link>

                    </div>
                </div>
                )}
            </section>
        )
    }
}
// state ={
//     friendsPractices:[]
// }


// showFriends(){
//     let friendsData = [];
//     this.props.friends.forEach(userIds => {
//         FriendManager.getFriendsPractice(userIds.userId)
//         .then(allPractices => {
//             console.log(allPractices)
//             friendsData.push(allPractices)
//         })
//         this.setState({
//             friendsPractices: friendsData
//         })
//     });
// }

// componentDidMount(){
//     this.showFriends();
// }