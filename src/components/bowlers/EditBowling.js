import React, { Component } from "react"
import BowlerManager from "../../modules/BowlerManager"

export default class EditBowling extends Component {

    state = {
        userId: sessionStorage.getItem("user"),
        oversBowled: "",
        runsConceded: "",
        wickets: "",
        extras: "",
        bowlDate: ""
    }

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }


    updateExistingBowler = evt => {
      evt.preventDefault()


      const existingBowler = {
        userId: this.state.userId,
        oversBowled: this.state.oversBowled,
        runsConceded: this.state.runsConceded,
        wickets: this.state.wickets,
        extras: this.state.extras,
        bowlDate: this.state.bowlDate
      }

      this.props.updateBowler(this.props.match.params.bowlerId, existingBowler)
      .then(() => this.props.history.push("/bowlers"))
    }

    componentDidMount() {
      BowlerManager.get(this.props.match.params.bowlerId)
      .then(bowler => {
        this.setState({
            userId: this.state.userId,
            runsConceded: bowler.runsConceded,
            oversBowled: bowler.oversBowled,
            wickets: bowler.wickets,
            extras: bowler.extras,
            bowlDate: bowler.bowlDate,
            id: bowler.id,
        })
      })
    }

    render() {
      return (
        <React.Fragment>
          <form className="bowlers">
            <div className="bowler">
              <label htmlFor="runsConceded">Runs Conceded: </label>
              <input type="text" required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="runsConceded"
                    value={this.state.runsConceded} />
            </div>
            <div className="bowler">
              <label htmlFor="oversBowled">Overs Bowled: </label>
              <input type="text" required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="oversBowled"
                    value={this.state.oversBowled} />
            </div>
            <div className="bowler">
              <label htmlFor="wickets">Wickets: </label>
              <input type="text" required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="wickets"
                    value={this.state.wickets} />
            </div>
            <div className="bowler">
              <label htmlFor="extras">Extras: </label>
              <input type="text" required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="extras"
                    value={this.state.extras} />
            </div>
            <button type="submit" onClick={this.updateExistingBowler} className="btn btn-primary">Update</button>
          </form>
        </React.Fragment>
      )
    }
}