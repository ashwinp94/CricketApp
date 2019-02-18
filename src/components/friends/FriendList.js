import React, { Component } from 'react'
import FriendManager from "../../modules/FriendManager";
import {Link} from 'react-router-dom'
import "./FriendList.css"

export default class FriendList extends Component {
    state ={
      friends: [],
    }
    componentDidMount(){

        FriendManager.getYourFriends(Number(sessionStorage.getItem("user")))
        .then(allFriends => {
          this.setState({
            friends: allFriends
          })
        })
     }

  componentDidUpdate(){

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
            <div>
            <Link type="button" className="nav-link" to="/search">Add Friend</Link>
            <section className="friends">
            {
                this.state.friends.map(friend =>
                <div id = "card">
                    <div className="card-body" id ={friend.id} key={friend.user.id}>
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
            </React.Fragment>
        );
    }
}

// state ={
//     friendsPractices:[]
// }


// showFriends(){
//     let friendsStuff = [];
//     this.props.friends.forEach(userIds => {
//         FriendManager.getFriendsPractice(userIds.userId)
//         .then(allPractices => {
//             console.log(allPractices)
//             friendsStuff.push(allPractices)
//         })
//         this.setState({
//             friendsPractices: friendsStuff
//         })
//     });
// }

// componentDidMount(){
//     this.showFriends();
// }
// age: 20
// batters: Array(1)
// 0:
// ballsFaced: "23"
// batDate: "2019-02-05T18:24:39.369Z"
// id: 12
// numberofFours: "1"
// numberofSixes: "1"
// runsScored: "12"
// userId: 3
// __proto__: Object
// length: 1
// __proto__: Array(0)
// id: 3
// password: "password"
// role: "Bowler"
// username: "ash"