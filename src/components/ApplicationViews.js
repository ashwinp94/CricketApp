import React, { Component } from "react";
import { Route } from "react-router-dom"
import BatterList from "./batters/BatterList";
import BatterManager from "../modules/BatterManager";

export default class ApplicationViews extends Component {
  state = {
    users: [],
    batters: [],
    bowlers: [],
    events: [],
    friends: [],
  };
  componentDidMount() {
    BatterManager.getAll().then(allBatters => {
      this.setState({
        batters: allBatters
      });
    });
  }
  render() {
    return (
      <React.Fragment>
        <Route exact path="/batters"
          render={(props) => {
          return <BatterList {...props}
            batters={this.state.batters}/>
        }} />
      </React.Fragment>
    )
  }
}
