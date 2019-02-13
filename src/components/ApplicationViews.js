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
import SearchResults from './search/SearchResults'
import SearchInput from './search/SearchInput'
import BatterDetail from "./batters/BatterDetail";
import BowlerDetail from "./bowlers/BowlerDetail";
import RolesManager from "../modules/RolesManager";
import EventManager from '../modules/EventManager'
import EventList from "./events/EventList"
import EventForm from "./events/EventForm"
import EventEdit from "./events/EventEdit"
import FriendList from "./friends/FriendList"
import FriendDetail from "./friends/FriendDetail"
import FriendManager from "../modules/FriendManager";

export default class ApplicationViews extends Component {
  isAuthenticated = () => sessionStorage.getItem("user") !== null
  state = {
    users: [],
    batters: [],
    bowlers: [],
    events: [],
    friends: [],
    roles: [],
    friendsId:[],
    userId: Number(sessionStorage.getItem("user"))
  };

  componentDidMount() {
    BatterManager.getYourBatters(Number(sessionStorage.getItem("user"))).then(allBatters => {
      this.setState({
        batters: allBatters
      });
    });

    BowlerManager.getYourBowlers(this.state.userId).then(allBowlers => {
      this.setState({
        bowlers: allBowlers
      });
    });

    EventManager.getYourEvents(this.state.userId).then(allEvents => {
      this.setState({
        events: allEvents
      })
    })

    FriendManager.getYourFriends(this.state.userId).then(allFriends => {
      this.setState({
        friends: allFriends
      })
    })

    RolesManager.getAll().then(allRoles => {
      this.setState({
        roles: allRoles
      })
    })

    LoginManager.getAll().then(allUsers=>{
      this.setState({
        users: allUsers
      })
    })
    FriendManager.getFriendsId(this.state.userId).then(allFriendsId => {
      this.setState({
        friendsId: allFriendsId
      })
    })
    // this.showFriends();

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
      .then(() => BowlerManager.getYourBowlers(this.state.userId))
      .then(bowler =>
        this.setState({
          bowlers: bowler
        })
      )

  addBatter = newBatter =>
    BatterManager.post(newBatter)
      .then(() => BatterManager.getYourBatters(this.state.userId))
      .then(batter =>
        this.setState({
          batters: batter
        })
      )
  addEvent = event =>
    EventManager.post(event)
      .then(() => EventManager.getYourEvents(this.state.userId))
      .then(events => this.setState({
        events: events
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

  deleteEvent = id => {
    return fetch(`http://localhost:5002/events/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(() => fetch(`http://localhost:5002/events?userId=${this.state.userId}`))
      .then(response => response.json())
      .then(event =>
        this.setState({
          events: event
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
    .then(()=> BatterManager.getYourBatters(this.state.userId))
    .then(batter =>{
      this.setState({
        batters:batter
      })
    })
  }

  updateBowler = (bowlerId, editedBowlerObj) => {
    return BowlerManager.put(bowlerId, editedBowlerObj)
    .then(()=> BowlerManager.getYourBowlers(this.state.userId))
    .then(bowler =>{
      this.setState({
        bowlers:bowler
      })
    })
  }
  updateEvent = (eventId, editedEventObj) => {
    return EventManager.put(eventId, editedEventObj)
      .then(() => EventManager.getYourEvents(this.state.userId))
      .then(event => {
        this.setState({
          events: event
        })
      })
  }
  // verify functions
  verifyUser = (username, password) => {
    LoginManager.getUsernameAndPassword(username, password)
      .then(allUsers => this.setState({
        users: allUsers
      }))
  }

  checkUsername = (username) => {
    LoginManager.getUsername(username)
      .then(allUsers => this.setState({
        users: allUsers
      }))
  }
  // show functions


// showFriends(){
//     let friendsData = [];
//     this.state.friends.forEach(friend => {
//         FriendManager.getFriendsPractice(friend.userId)
//         .then(allPractices => {
//             console.log(allPractices)
//             friendsData.push(allPractices)
//         })
//         this.setState({
//             friendsPractices: friendsData
//         })
//     });
// }

  render() {
    return (
      <React.Fragment>

        {/* login sections */}

        <Route exact path="/login"
        render={(props) => {

          return <Login {...props}
          component={Login}
            verifyUser={this.verifyUser}
            users={this.state.users} />
        }} />

        <Route exact path="/login/new"
          render={(props) => {
          return <LoginForm {...props}
            users={this.state.users}
            addUser={this.addUser}
            checkUsername={this.checkUsername}
            roles ={this.state.roles}
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
                  />
          } else {
            return <Redirect to="/login" />
                }
              }} />
          <Route  exact path="/batters/:batterId(\d+)"
          render={(props) => {
            if (this.isAuthenticated()){
                  return <BatterDetail {...props}
                  deleteBatter={this.deleteBatter}
                  batters={this.state.batters} />
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

        <Route  exact path="/bowlers/:bowlerId(\d+)"
          render={(props) => {
            if (this.isAuthenticated()){
                  return <BowlerDetail {...props}
                  deleteBowler={this.deleteBowler}
                  bowlers={this.state.bowlers} />

                } else {
                  return <Redirect to="/login" />
                      }
                }} />

        <Route exact path='/bowlers/:bowlerId(\d+)/edit'
          render={(props => {
          if (this.isAuthenticated()) {
            return <EditBowling {...props}
              updateBowler={this.updateBowler} />

          } else {
            return <Redirect to="/login" />
          }
        })} />

        {/*BEGIN EVENT ROUTING*/}

        <Route exact path="/events" render={(props) => {
          if (this.isAuthenticated()) {
            return <EventList {...props}
              events={this.state.events}
              deleteEvent={this.deleteEvent}
              userId={this.state.userId}/>
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route exact path="/events/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <EventForm {...props}
              addEvent={this.addEvent} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route exact path="/events/:eventId(\d+)/edit" render={props => {
          if (this.isAuthenticated()) {
            return <EventEdit {...props}
            updateEvent={this.updateEvent} />
          } else {

            return <Redirect to="/login" />
          }
          }} />

          {/*friends routing */}

          <Route exact path="/friends" render={props => {
            if (this.isAuthenticated()) {
              return <FriendList {...props}
              friends = {this.state.friends}
              users = {this.state.users}
              friendsId = {this.state.friendsId}
              friendsPractices= {this.state.friendsPractices}
              />
              // Remove null and return the component which will show list of friends
            } else {
              return <Redirect to="/login" />
            }
            }} />

          <Route  exact path="/friends/:id(\d+)"
                    render={(props) => {
            if (this.isAuthenticated()){
                  return <FriendDetail {...props}
                  friends ={this.state.friends}
                  users ={this.state.users}
                  friendsPractices={this.state.friendsPractices}


                   />
                } else {
                  return <Redirect to="/login" />
                      }
                }} />

        {/* search routing */}

        <Route
          path="/search"
          render={props => {
            if (this.isAuthenticated()) {
            return (
              <SearchInput {...this.props}/>
            );
          } else {

            return <Redirect to="/login" />
          }
          }}
        />
        <Route
          path="/search"
          render={props => {
            if (this.isAuthenticated()) {

            return (
              <SearchResults {...this.props}
              />
            );
          } else {

            return <Redirect to="/login" />
          }
          }}
        />
      </React.Fragment>
    )
  }
}
