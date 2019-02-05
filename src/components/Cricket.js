import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import SearchManager from '../modules/SearchManager'

class Cricket extends Component {
    state = {
        users: [],

      }

      searchAllData = (searchQuery) => {
        const newSearchResults = {}
        return SearchManager.searchUsers(searchQuery)
        .then(response => newSearchResults.users = response)
        .then(() => this.setState(newSearchResults))

      }

  render() {
    return (
      <React.Fragment>
        <NavBar searchAllData = {this.searchAllData}/>
        <ApplicationViews users={this.state.users}/>
      </React.Fragment>
    );
  }
}

export default Cricket;
