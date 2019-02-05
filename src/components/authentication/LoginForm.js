import React, { Component } from "react"


export default class LoginForm extends Component {
    // Set initial state

    state = {
      username: "",
      password: "",
      role: "",
      age: "",
    }


    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
    constructNewUser = evt => {
        evt.preventDefault()
            const User = {
                username: this.state.username,
                password: this.state.password,
                role: this.state.role,
                age: this.state.age

            };

            // Create the animal and redirect user to animal list
            this.props.addUser(User)
            .then(() => this.props.history.push("/login"));
        }

    render() {
        return (
            <React.Fragment>
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
                        <label htmlFor="role">Player Role</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="role"
                               placeholder="Role" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="age"
                               placeholder="Age" />
                    </div>
                    {/* <div className="form-group">
                        <div className="form-header">
                            <div className="dd-header-title">Player Role</div>
                        </div>
                        <ul className="dd-list">
                            <li className="dd-list-item"
                            onChange={this.handleFieldChange}>Batsmen</li>
                            <li className="dd-list-item"
                            onChange={this.handleFieldChange}>Bowler</li>
                            <li className="dd-list-item"
                            onChange={this.handleFieldChange}>All-Rounder</li>
                        </ul>
                    </div> */}

                    {/* <div className="form-group">
                        <label htmlFor="employee">Assign to caretaker</label>
                        <select
                        defaultValue=""
                        name="employee"
                        id="employee"
                                onChange={this.handleFieldChange}>
                            <option value="">Select an employee</option>
                        {
                            this.props.employees.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                        }
                        </select>
                    </div> */}
                    <button type="submit" onClick={this.constructNewUser} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}