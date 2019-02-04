import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

export default class ApplicationViews extends Component {
  state = {
    users: [],
    batters: [],
    bowlers: [],
    events: [],
    friends: [],
  };
  componentDidMount() {
  }
  render() {
    return (
      <React.Fragment>
        <Route exact path="/news" render={(props) => {
          return <NewsList {...props} newsitems={this.state.newsitems}
            deleteNews={this.deleteNews} />
        }} />
        <Route path="/news/new" render={(props) => {
          return <NewsForm {...props} addNews={this.addNews} />
        }} />
      </React.Fragment>
    )
  }
}
