import React, { Component } from "react";
import { Link } from "react-router-dom"

// import FriendManager from "../../modules/FriendManager"
export default class SearchResults extends Component {

  // state ={
  //   friends: [{
  //     currentUserId: Number(sessionStorage.getItem("user")),
  //     userId: [],
  //   }],
  // }
  // componentDidMount(){
  //   FriendManager.getYourFriends(Number(sessionStorage.getItem("user"))).then(allFriends => {
  //     this.setState({
  //       friends: allFriends
  //     })
  //   })
  // }

  saveFriend = (userId) => {

    const friend = {
      currentUserId: Number(sessionStorage.getItem("user")),
      userId: userId,
    }

    this.props.addFriend(friend)
  }
  // window.location.reload()

  render() {
    return (
      <React.Fragment>
        <div id="home">
          <section className="search--results">
            <h3>{Object.keys(this.props)[0]}</h3>
            {this.props.users.map(result => (
              <div key={result.id}>
                <p>{result.username}</p>
                <Link type="button"
                  onClick={() => this.saveFriend(result.id)}
                  to="/friends"
                  className="btn btn-primary">Save</Link>
              </div>
            ))}
          </section>
        </div>
      </React.Fragment>
    );
  }
}