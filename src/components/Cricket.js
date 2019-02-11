import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import SearchManager from '../modules/SearchManager'
import FriendManager from "../modules/FriendManager";

class Cricket extends Component {
    state = {
        users: [],
        friends: [],
        currentUserId: Number(sessionStorage.getItem("users"))
      }
      componentDidMount() {
        FriendManager.getYourFriends(this.state.currentUserId).then(allFriends => {
          this.setState({
            friends: allFriends
          })
        })
      }

      searchAllData = (searchQuery) => {
        const newSearchResults = {}
        return SearchManager.searchUsers(searchQuery)
        .then(response => newSearchResults.users = response)
        .then(() => this.setState(newSearchResults))
      }

      addFriend = newFriend =>
      SearchManager.post(newFriend)

      .then(() => FriendManager.getYourFriends(this.state.currentUserId))
      .then(friend =>
        this.setState({
          friends: friend
        })
      );


  render() {
    return (
      <React.Fragment>
          <NavBar/>
        <ApplicationViews users={this.state.users}
                        searchAllData = {this.searchAllData}
                        addFriend = {this.addFriend}
                        friends= {this.state.friends}/>
      </React.Fragment>
    );
  }
}

export default Cricket;
