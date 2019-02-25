import React, { Component } from "react"
import "./Login.css"
import logo from "../images/official.png"
export default class Login extends Component {

    // Set initial state
    state = {
        username: "",
        password: "",
        batters: [],
        bowlers: [],
        events: [],
        friends: [],
        currentUser: [],
        userId: Number(sessionStorage.getItem("user")),
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // Simplistic handler for login submit
    onLogin = (evt) => {
        evt.preventDefault();
        this.props.verifyUser(this.state.username, this.state.password)
        if (this.props.users.length < 1) {
            alert("We can't seem to find you! Try registering below")

        } else {
            this.props.users.forEach(user => {
                let loggedIn = false;

                if (this.state.username === user.username && this.state.password === user.password) {
                    loggedIn = true;
                }
                if (loggedIn === true) {
                    sessionStorage.setItem("user", user.id)
                    this.props.updateState()
                    this.props.history.push("/profile")
                }
            })
        }
    }

    render() {
        return (
            <div id="home1">
                <form className="logInForm" onSubmit={this.onLogin}>
                    <img id="image"src={logo} alt="Logo" width="220" height="270" margin-left="90em    "/>
                    <h1 className="h3 mb-3 font-weight-normal title">Please sign in</h1>
                    <label htmlFor="inputUsername">
                        Username
            </label>
                    <input onChange={this.handleFieldChange} type="text"
                        id="username"
                        placeholder="Username"
                        required="" autoFocus="" />
                    <label htmlFor="inputPassword">
                        Password
            </label>
                    <input onChange={this.handleFieldChange} type="password"
                        id="password"
                        placeholder="Password"
                        required="" />
                    <button className="signInButton" type="submit">
                        Sign in
            </button>
                    <button className="registerButton" type="button"
                        onClick={() => this.props.history.push("/login/new")}>
                        Register
                </button>
                </form>
            </div>
        )
    }
}