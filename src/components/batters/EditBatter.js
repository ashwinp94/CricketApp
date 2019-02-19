import React, { Component } from "react"
import BatterManager from "../../modules/BatterManager"

export default class EditBatter extends Component {

    state = {
        userId: Number(sessionStorage.getItem("user")),
        runsScored: "",
        ballsFaced: "",
        numberofFours: "",
        numberofSixes: "",
        batDate: ""
    }

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }


    updateExistingBatter = evt => {
      evt.preventDefault()


      const existingBatter = {
        userId: this.state.userId,
        runsScored: this.state.runsScored,
        ballsFaced: this.state.ballsFaced,
        numberofFours: this.state.numberofFours,
        numberofSixes: this.state.numberofSixes,
        batDate: this.state.batDate
      }

      this.props.updateBatter(this.props.match.params.batterId, existingBatter)
      .then(() => this.props.history.push("/batters"))
    }

    componentDidMount() {
      BatterManager.get(this.props.match.params.batterId)
      .then(batter => {
        this.setState({
            userId: this.state.userId,
            runsScored: batter.runsScored,
            ballsFaced: batter.ballsFaced,
            numberofFours: batter.numberofFours,
            numberofSixes: batter.numberofSixes,
            batDate: batter.batDate,
            id: batter.id,
        })
      })
    }

    render() {
      return (
        <React.Fragment>
          <div id="home">
          <form className="batters">
            <div className="batter">
              <label htmlFor="runsScored">Runs Scored: </label>
              <input type="text" required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="runsScored"
                    value={this.state.runsScored} />
            </div>
            <div className="batter">
              <label htmlFor="ballsFaced">Total Balls Played: </label>
              <input type="text" required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="ballsFaced"
                    value={this.state.ballsFaced} />
            </div>
            <div className="batter">
              <label htmlFor="numberofFours">Number Of Fours: </label>
              <input type="text" required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="numberofFours"
                    value={this.state.numberofFours} />
            </div>
            <div className="batter">
              <label htmlFor="numberofSixes">Number Of Sixes: </label>
              <input type="text" required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="numberofSixes"
                    value={this.state.numberofSixes} />
            </div>
            <button type="submit" onClick={this.updateExistingBatter} className="btn btn-primary">Update</button>
          </form>
          </div>
        </React.Fragment>
      )
    }
}