import React, { Component } from "react";

export default class SearchResults extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="search--results">
        {/* I would refactor by putting this code that's repeated three times into its own module and then looping to render the new module thrice. */}
          <h3>{Object.keys(this.props)[0]}</h3>
          {this.props.users.map(result => (
            <p>{result.username}</p>
          ))}
        </section>
      </React.Fragment>
    );
  }
}