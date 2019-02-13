import React, { Component } from 'react'
// import FriendManager from "../../modules/FriendManager";
import {Link} from 'react-router-dom'
export default class FriendList extends Component {



    render() {
        return (
            <div>
            <section className="friends">
            {
                this.props.friends.map(friend =>
                    <div id ={friend.user.id} key={friend.user.id}>
                        <p>{friend.user.username}</p>

                        <Link className="nav-link" to={`/friends/${friend.user.id}`}
                        >  Details </Link>

                    </div>
            )}
            </section>
            </div>
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