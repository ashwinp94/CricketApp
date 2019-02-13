import React, { Component } from "react";

export default class SearchResults extends Component {


  saveFriend = (userId) => {

    const friend = {
      currentUserId: Number(sessionStorage.getItem("user")),
      userId: userId,
    }

    this.props.addFriend(friend)
    // window.location.reload()
  }

  render() {
    return (
      <React.Fragment>
        <section className="search--results">
          <h3>{Object.keys(this.props)[0]}</h3>
          {this.props.users.map(result => (
            <div key={result.id}>
            <p>{result.username}</p>
            <button type="button"

            onClick={() => this.saveFriend(result.id)}
            className="btn btn-primary">Save</button>
          </div>
          ))}
        </section>
      </React.Fragment>
    );
  }
}