import React, { Component } from "react"
import LoginManager from "../../modules/LoginManager"

export default class EditProfile extends Component {

    state = {
        username: "",
        age: "",
        password: "",
        role: "",
        id: Number(sessionStorage.getItem("user"))
        }

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }


    updateExistingUser = evt => {
      evt.preventDefault()


      const existingUser = {
        username: this.state.username,
        password: this.state.password,
        age: this.state.age,
        role: this.state.role,
        id: this.state.id,

      }

      this.props.updateUser(this.props.match.params.id, existingUser)
      .then(() => this.props.history.push("/profile"))
    }

    componentDidMount() {
        LoginManager.getUser(Number(sessionStorage.getItem("user")))
        .then(currentUser => {
        this.setState({
            username: currentUser.username,
            age: currentUser.age,
            role: currentUser.role,
            id: this.state.id,
            password: currentUser.password,
        })
      })
    }

    render() {
        return (
          <React.Fragment>
              <div id="home">
                       <form className="users">
              <div className="user">
                <label htmlFor="username">New Username: </label>
                <input type="text" required
                      className="form-control"
                      onChange={this.handleFieldChange}
                      id="username"
                      value={this.state.username} />
              </div>

              <div className="age">
                <label htmlFor="age">Age: </label>
                <input type="text" required
                      className="form-control"
                      onChange={this.handleFieldChange}
                      id="age"
                      value={this.state.age} />
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

              <button type="submit" onClick={this.updateExistingUser} className="btn btn-primary">Update</button>
            </form>
                    </div>
          </React.Fragment>
        )
      }
  }