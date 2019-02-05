import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class BowlerList extends Component {
  render() {
    const sortedBowlerItems = [].concat(this.props.bowlers)
                          .sort((a,b) => {return new Date(a.bowlDate) - new Date(b.bowlDate)})
                          .map(bowler =>
                                  <div key={bowler.id} className="card">
                                    <div className="card-body">
                                      <p>Date: {bowler.bowlDate}</p>
                                      <p>Runs Conceded: {bowler.runsConceded}</p>
                                      <p>Total Overs Bowled: {bowler.oversBowled}</p>
                                      <p>Wickets: {bowler.wickets}</p>
                                      <p>Extras: {bowler.extras}</p>
                                      <button type="button"
                                          id="deleteButton"
                                          onClick={() => this.props.deleteBowler(bowler.id)}
                                          className="btn btn-success">
                                          Delete
                                      </button>
                                      <Link className="nav link" to={`/bowlers/${bowler.id}/edit`}>Edit</Link>
                                      </div>
                                  </div>
                          )

    return (
      <React.Fragment>
          <div className="eventBtn">
            <button type="button"
                    className="btn btn-success"
                    onClick={() => {
                      this.props.history.push("/bowlers/new")}
                    }>
                    Add Bowling Session
            </button>
          </div>

          <section className="bowlers">
          <h2>Your Bowling Practice Sessions</h2>
            <div className="card-items">{sortedBowlerItems}</div>
          </section>

      </React.Fragment>
    )
  }
}
