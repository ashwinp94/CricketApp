import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class BatterList extends Component {
  render() {
    const sortedBatterItems = [].concat(this.props.batters)
                          .sort((a,b) => {return new Date(a.batDate) - new Date(b.batDate)})
                          .map(batter =>
                                  <div key={batter.id} className="card">
                                    <div className="card-body">
                                      <p>{batter.batDate}</p>
                                      <p>{batter.runsScored}</p>
                                      <p>{batter.ballsFaced}</p>
                                      <p>{batter.numberofFours}</p>
                                      <p>{batter.numberofSixes}</p>
                                      <button type="button"
                                          id="deleteButton"
                                          onClick={() => this.props.deleteBatter(batter.id)}
                                          className="btn btn-success">
                                          Delete
                                      </button>
                                      <Link className="nav-link" to={`/batters/${batter.id}/edit`}>Edit</Link>
                                    </div>
                                  </div>
                          )
    return (
      <React.Fragment>
          <div className="batterBtn">
            <button type="button"
                    className="btn btn-success"
                    onClick={() => {
                      this.props.history.push("/batters/new")}
                    }>
                    Add Session
            </button>
          </div>

          <section className="batters">
          <h2>Your Batting Practices</h2>
            <div className="card-items">
            {sortedBatterItems}</div>
          </section>

      </React.Fragment>
    )
  }
}
