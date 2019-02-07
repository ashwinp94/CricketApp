import React, { Component } from "react";

export default class SearchResults extends Component {
  state = {
    currentUserId: Number(sessionStorage.getItem("user")),
    userId: [],
}

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  saveFriend = evt => {
    evt.preventDefault()

    const friend = {
      currentUserId: this.state.currentUserId,
      userId: this.state.userId,
    }

    this.props.addFriend(friend).then(() => this.props.history.push("/search"))
  }

  render() {
    return (
      <React.Fragment>
        <section className="search--results">
        {/* I would refactor by putting this code that's repeated three times into its own module and then looping to render the new module thrice. */}
          <h3>{Object.keys(this.props)[0]}</h3>
          {this.props.users.map(result => (
            <div>
            <p>{result.username}</p>
            <p onChange={this.handleFieldChange} id ="userId"> {result.id}</p>
            <button type="submit" onClick={this.saveFriend} className="btn btn-primary">Save</button>
          </div>
          ))}
        </section>
      </React.Fragment>
    );
  }
}