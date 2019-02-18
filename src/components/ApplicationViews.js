import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom"
// {List Components}
import BatterList from "./batters/BatterList";
import BowlerList from "./bowlers/BowlerList";
import EventList from "./events/EventList"
import FriendList from "./friends/FriendList"
// {Form Components}
import BatterForm from './batters/BatterForm'
import BowlerForm from './bowlers/BowlerForm'
import EventForm from "./events/EventForm"
import LoginForm from './authentication/LoginForm'
// {Edit Components}
import EditBowling from "./bowlers/EditBowling";
import EditBatter from "./batters/EditBatter";
import EventEdit from "./events/EventEdit"
import EditProfile from "./profile/EditProfile"
// {Detail Components}
import BatterDetail from "./batters/BatterDetail";
import BowlerDetail from "./bowlers/BowlerDetail";
import FriendDetail from "./friends/FriendDetail"
// {Data Modules}
import LoginManager from "../modules/LoginManager";
import BowlerManager from "../modules/BowlerManager";
import RolesManager from "../modules/RolesManager";
import EventManager from '../modules/EventManager'
import BatterManager from "../modules/BatterManager";
import FriendManager from "../modules/FriendManager";
// {Random Components}
import Login from './authentication/Login'
import SearchResults from './search/SearchResults'
import SearchInput from './search/SearchInput'
import ProfilePage from "./profile/ProfilePage"
import NavBar from "./nav/NavBar";

export default class ApplicationViews extends Component {
  isAuthenticated = () => sessionStorage.getItem("user") !== null
  state = {
    users: [],
    batters: [],
    bowlers: [],
    events: [],
    friends: [],
    roles: [],
    currentUser:[],
    userId: Number(sessionStorage.getItem("user"))
  };

  componentDidMount() {
    BatterManager.getYourBatters(Number(sessionStorage.getItem("user"))).then(allBatters => {
      this.setState({
        batters: allBatters
      });
    });

    BowlerManager.getYourBowlers(Number(sessionStorage.getItem("user"))).then(allBowlers => {
      this.setState({
        bowlers: allBowlers
      });
    });

    EventManager.getYourEvents(Number(sessionStorage.getItem("user"))).then(allEvents => {
      this.setState({
        events: allEvents
      })
    })

    FriendManager.getYourFriends(Number(sessionStorage.getItem("user"))).then(allFriends => {
      this.setState({
        friends: allFriends
      })
    })
    LoginManager.getUser(Number(sessionStorage.getItem("user"))).then(currentUsers => {
      this.setState({
        currentUser: currentUsers
      })
    })

    RolesManager.getAll().then(allRoles => {
      this.setState({
        roles: allRoles
      })
    })

    LoginManager.getAll().then(allUsers => {
      this.setState({
        users: allUsers
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
      .then(() => BowlerManager.getYourBowlers(Number(sessionStorage.getItem("user"))))
      .then(bowler =>
        this.setState({
          bowlers: bowler
        })
      )

  addBatter = newBatter =>
    BatterManager.post(newBatter)
      .then(() => BatterManager.getYourBatters(Number(sessionStorage.getItem("user"))))
      .then(batter =>
        this.setState({
          batters: batter
        })
      )
  addEvent = event =>
    EventManager.post(event)
      .then(() => EventManager.getYourEvents(Number(sessionStorage.getItem("user"))))
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
      .then(() => fetch(`http://localhost:5002/batters?userId=${Number(sessionStorage.getItem("user"))}`))
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
      .then(() => fetch(`http://localhost:5002/events?userId=${Number(sessionStorage.getItem("user"))}`))
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
      .then(() => fetch(`http://localhost:5002/bowlers?userId=${Number(sessionStorage.getItem("user"))}`))
      .then(response => response.json())
      .then(bowler =>
        this.setState({
          bowlers: bowler
        })
      );
  };

  deleteFriend = id => {
    return fetch(`http://localhost:5002/friends/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(() => fetch(`http://localhost:5002/friends?currentUserId=${Number(sessionStorage.getItem("user"))}`))
      .then(response => response.json())
      .then(friend =>
        this.setState({
          friends: friend
        })
      );
  };

  //Edit Functions
  updateBatter = (batterId, editedBatterObj) => {
    return BatterManager.put(batterId, editedBatterObj)
      .then(() => LoginManager.getUser(Number(sessionStorage.getItem("user"))))
      .then(user => {
        this.setState({
          currentUser: user
        })
      })
  }
  updateUser = (id, editedUserObj) => {
    return LoginManager.put(id, editedUserObj)
      .then(() => LoginManager.getUser(Number(sessionStorage.getItem("user"))))
      .then(user => {
        this.setState({
          currentUser: user
        })
      })
  }

  updateBowler = (bowlerId, editedBowlerObj) => {
    return BowlerManager.put(bowlerId, editedBowlerObj)
      .then(() => BowlerManager.getYourBowlers(Number(sessionStorage.getItem("user"))))
      .then(bowler => {
        this.setState({
          bowlers: bowler
        })
      })
  }
  updateEvent = (eventId, editedEventObj) => {
    return EventManager.put(eventId, editedEventObj)
      .then(() => EventManager.getYourEvents(Number(sessionStorage.getItem("user"))))
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
  //misc functions

  updateState = () => {

    BatterManager.getYourBatters(Number(sessionStorage.getItem("user"))).then(allBatters => {
      this.setState({
        batters: allBatters
      });
    });

    BowlerManager.getYourBowlers(Number(sessionStorage.getItem("user"))).then(allBowlers => {
      this.setState({
        bowlers: allBowlers
      });
    });

    EventManager.getYourEvents(Number(sessionStorage.getItem("user"))).then(allEvents => {
      this.setState({
        events: allEvents
      })
    })

    FriendManager.getYourFriends(Number(sessionStorage.getItem("user"))).then(allFriends => {
      this.setState({
        friends: allFriends
      })
    })

    LoginManager.getUser(Number(sessionStorage.getItem("user"))).then(currentUsers => {
      this.setState({
        currentUser: currentUsers
      })
    })

    RolesManager.getAll().then(allRoles => {
      this.setState({
        roles: allRoles
      })
    })

    LoginManager.getAll().then(allUsers => {
      this.setState({
        users: allUsers
      })
    })
  }

  logOut = evt => {
    evt.preventDefault()
    sessionStorage.removeItem("user");
    this.setState({
      batters: [],
      bowlers: [],
      events: [],
      friends: [],
      currentUser:[],
    })
  }


  // show functions
  showNav = () => {
		if (this.isAuthenticated()) {
			return <NavBar {...this.props}
      logOut={this.logOut} />
    }
  }

  render() {
    return (
      <React.Fragment>

       {this.showNav()}

        {/* login sections */}

        <Route exact path="/login"
          render={(props) => {

            return <Login {...props}
              updateState={this.updateState}
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
              roles={this.state.roles}
              userId={Number(sessionStorage.getItem("user"))} />
          }} />

        {/* {profile section} */}

        <Route exact path="/profile"
          render={(props) => {
            if (this.isAuthenticated()) {
              return <ProfilePage {...props}
                currentUser={this.state.currentUser}
                userId={Number(sessionStorage.getItem("user"))} />

            } else {
              return <Redirect to="/login" />
            }
          }} />

        <Route exact path='/profile/:id(\d+)/edit' render={(props => {
          if (this.isAuthenticated()) {
            return <EditProfile {...props}
              updateUser={this.updateUser}
              roles={this.state.roles}/>
          } else {
            return <Redirect to="/login" />
          }
          })} />

        {/* Battting sections */}

        <Route exact path="/batters"
          render={(props) => {
            if (this.isAuthenticated()) {
              return <BatterList {...props}
                batters={this.state.batters}
                deleteBatter={this.deleteBatter}
                userId={Number(sessionStorage.getItem("user"))} />

            } else {
              return <Redirect to="/login" />
            }
          }} />

        <Route exact path="/batters/new"
          render={(props) => {
            if (this.isAuthenticated()) {
              return <BatterForm {...props}
                addBatter={this.addBatter}
              />
            } else {
              return <Redirect to="/login" />
            }
          }} />
        <Route exact path="/batters/:batterId(\d+)"
          render={(props) => {
            if (this.isAuthenticated()) {
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
                userId={Number(sessionStorage.getItem("user"))} />

            } else {
              return <Redirect to="/login" />
            }
          }} />

        <Route exact path="/bowlers/new"
          render={(props) => {
            if (this.isAuthenticated()) {
              return <BowlerForm {...props}
                addBowler={this.addBowler} />

            } else {
              return <Redirect to="/login" />
            }
          }} />

        <Route exact path="/bowlers/:bowlerId(\d+)"
          render={(props) => {
            if (this.isAuthenticated()) {
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
              userId={Number(sessionStorage.getItem("user"))} />
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
              deleteFriend={this.deleteFriend}
              friends={this.state.friends}
              users={this.state.users}
              friendsPractices={this.state.friendsPractices}
            />
            // Remove null and return the component which will show list of friends
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route exact path="/friends/:id(\d+)"
          render={props => {
            if (this.isAuthenticated()) {
              return <FriendDetail {...props}
                friends={this.state.friends}
                users={this.state.users}
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
                <SearchInput {...this.props} />
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
