import React, { Component } from "react"
import LoginManager from '../../modules/LoginManager'

export default class LoginForm extends Component {
    // Set initial state

    state = {
        username: [],
        password: [],
        role: [],
        age: [],
        users: [],
    }

    componentDidUpdate() {

        LoginManager.getUsername(this.state.username)
            .then(allUsers => this.setState({
                users: allUsers
            }))
    }


    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    onRegister = (evt) => {
        evt.preventDefault();
        const User = {
            username: this.state.username,
            password: this.state.password,
            role: this.state.role,
            age: this.state.age
        };

        this.props.checkUsername(this.state.username)
        console.log(this.state.users)

        if (this.state.users.length === 1) {
            alert("Username Already Taken! Choose Another")

        } else {
            this.props.addUser(User)
                .then(() => this.props.history.push("/login"));
        }
    }

    render() {
        return (
            <React.Fragment>
                <div id="home">
                    <form className="LoginForm">
                        <div className="form-group">
                            <h1>Register Here</h1>
                            <label htmlFor="username">Username: </label>
                            <input type="text" required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="username"
                                placeholder="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="password"
                                placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="age">Age</label>
                            <input type="text" required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="age"
                                placeholder="Age" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="role">Select a Role</label>
                            <select defaultValue="" name="role" id="role"
                                onChange={this.handleFieldChange}>
                                <option value="">Select a Role</option>
                                {
                                    this.props.roles.map(role => <option key={role.id} id={role.id}>{role.name}</option>)
                                }
                            </select>
                        </div>

                        <button type="submit" onClick={this.onRegister} className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}