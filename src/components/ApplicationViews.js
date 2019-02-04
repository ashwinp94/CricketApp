import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom"
import BatterList from "./batters/BatterList";
import BatterManager from "../modules/BatterManager";
import Login from './authentication/Login'
import LoginForm from './authentication/LoginForm'
import LoginManager from "../modules/LoginManager";

export default class ApplicationViews extends Component {
  state = {
    users: [],
    batters: [],
    bowlers: [],
    events: [],
    friends: [],
    userId: sessionStorage.getItem("user")
  };
  isAuthenticated = () => sessionStorage.getItem("user") !== null

  componentDidMount() {
    BatterManager.getAll().then(allBatters => {
      this.setState({
        batters: allBatters
      });
    });
  }

  //addFunctions

  addUser = newUser =>
    LoginManager.post(newUser)
      .then(() => LoginManager.getAll())
      .then(user =>
        this.setState({
          users: user
        })
      );
  // verify function
  verifyUser = (username, password) => {
    LoginManager.getUsernameAndPassword(username, password)
      .then(allUsers => this.setState({
        users: allUsers
      }))
  }

  render() {
    return (
      <React.Fragment>
        <Route path="/login" render={(props) => {

          return <Login {...props} component={Login}

            verifyUser={this.verifyUser}
            users={this.state.users} />
        }} />

        <Route exact path="/login/new" render={(props) => {
          return <LoginForm {...props}
            users={this.state.users}
            addUser={this.addUser}
            userId={this.state.userId} />
        }} />

        <Route exact path="/batters"
          render={(props) => {
            if (this.isAuthenticated()) {

            return <BatterList {...props}
              batters={this.state.batters} />

            } else {
              return <Redirect to="/login" />
            }
          }} />


      </React.Fragment>
    )
  }
}
