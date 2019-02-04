import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom"
import BatterList from "./batters/BatterList";
import BatterManager from "../modules/BatterManager";
import BatterForm from './batters/BatterForm'
import BowlerManager from "../modules/BowlerManager";
import BowlerList from "./bowlers/BowlerList";
import BowlerForm from './bowlers/BowlerForm'
import Login from './authentication/Login'
import LoginManager from "../modules/LoginManager";
import LoginForm from './authentication/LoginForm'
import EditBowling from "./bowlers/EditBowling";
import EditBatter from "./batters/EditBatter";

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
    BatterManager.getYourbatters(this.state.userId).then(allBatters => {
      this.setState({
        batters: allBatters
      });
    });

    BowlerManager.getYourbowlers(this.state.userId).then(allBowlers => {
      this.setState({
        bowlers: allBowlers
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

  addBowler = newBowler =>
    BowlerManager.post(newBowler)
      .then(() => BowlerManager.getYourbowlers(this.state.userId))
      .then(bowler =>
        this.setState({
          bowlers: bowler
        })
      )

  addBatter = newBatter =>
    BatterManager.post(newBatter)
      .then(() => BatterManager.getYourbatters(this.state.userId))
      .then(batter =>
        this.setState({
          batters: batter
        })
      )

      //delete functions
  deleteBatter = id => {
    return fetch(`http://localhost:5002/batters/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(() => fetch(`http://localhost:5002/batters?userId=${this.state.userId}`))
      .then(response => response.json())
      .then(batter =>
        this.setState({
          batters: batter
        })
      );
  };

  deleteBowler = id => {
    return fetch(`http://localhost:5002/bowlers/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(() => fetch(`http://localhost:5002/bowlers?userId=${this.state.userId}`))
      .then(response => response.json())
      .then(bowler =>
        this.setState({
          bowlers: bowler
        })
      );
  };

  //Edit Functions
  updateBatter = (batterId, editedBatterObj) => {
    return BatterManager.put(batterId, editedBatterObj)
    .then(()=> BatterManager.getYourbatters(this.state.userId))
    .then(batter =>{
      this.setState({
        batters:batter
      })
    })
  }

  updateBowler = (bowlerId, editedBowlerObj) => {
    return BowlerManager.put(bowlerId, editedBowlerObj)
    .then(()=> BowlerManager.getYourbowlers(this.state.userId))
    .then(bowler =>{
      this.setState({
        bowlers:bowler
      })
    })
  }

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
        <Route path="/login"
        render={(props) => {

          return <Login {...props} component={Login}

            verifyUser={this.verifyUser}
            users={this.state.users} />
        }} />

        <Route exact path="/login/new"
          render={(props) => {
          return <LoginForm {...props}
            users={this.state.users}
            addUser={this.addUser}
            userId={this.state.userId} />
        }} />

            {/* Battting sections */}

        <Route  exact path="/batters"
          render={(props) => {
            if (this.isAuthenticated()) {
            return <BatterList {...props}
              batters={this.state.batters}
              deleteBatter={this.deleteBatter}
              userId={this.state.userId}/>

            } else {
              return <Redirect to="/login" />
            }
          }} />

          <Route exact path="/batters/new"
          render={(props) => {
                if (this.isAuthenticated()){
                  return <BatterForm {...props}
                  addBatter={this.addBatter}
                  userId={this.state.userId}/>
          } else {
            return <Redirect to="/login" />
                }
              }} />

        <Route exact path='/batters/:batterId(\d+)/edit' render={(props => {
          if (this.isAuthenticated()) {
            return <EditBatter {...props}
              updateBatter={this.updateBatter} />
          } else {
            return <Redirect to="/login" />
          }
        })} />

              {/* Bowling Sections */}

        <Route exact path="/bowlers"
          render={(props) => {
            if (this.isAuthenticated()) {
              return <BowlerList {...props}
              deleteBowler={this.deleteBowler}
                bowlers={this.state.bowlers}
                userId={this.state.userId} />

            } else {
              return <Redirect to="/login" />
            }
          }} />

        <Route exact path="/bowlers/new"
          render={(props) => {
            if (this.isAuthenticated()) {
              return <BowlerForm {...props}
                addBowler={this.addBowler}/>

            } else {
              return <Redirect to="/login" />
            }
          }} />

        <Route exact path='/bowlers/:bowlerId(\d+)/edit' render={(props => {
          if (this.isAuthenticated()) {
            return <EditBowling {...props}
              updateBowler={this.updateBowler} />
          } else {
            return <Redirect to="/login" />
          }
        })} />


      </React.Fragment>
    )
  }
}
