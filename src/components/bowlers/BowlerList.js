import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class BowlerList extends Component {
  render() {
    const sortedBowlerItems = [].concat(this.props.bowlers)
                          .sort((a,b) => {return new Date(a.bowlDate) - new Date(b.bowlDate)})
                          .reverse()
                          .map(bowler =>
                                  <div key={bowler.id} className="card">
                                    <div className="card-body">
                                      <h3>Date: {bowler.bowlDate}</h3>
                                      <button type="button"
                                          id="deleteButton"
                                          onClick={() => this.props.deleteBowler(bowler.id)}
                                          className="btn btn-success">
                                          Delete
                                      </button>
                                      <Link className="nav-link" to={`/bowlers/${bowler.id}`}>  Details </Link>
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
