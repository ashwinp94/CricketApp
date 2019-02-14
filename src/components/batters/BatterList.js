import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class BatterList extends Component {

  render() {
    const sortedBatterItems = [].concat(this.props.batters)
                          .sort((a,b) => {return new Date(a.batDate) - new Date(b.batDate)})
                          .reverse()
                          .map(batter =>
                                  <div key={batter.id} className="card">
                                    <div className="card-body">
                                      <h3>Date: {batter.batDate}</h3>
                                      <button type="button"
                                          id="deleteButton"
                                          onClick={() => this.props.deleteBatter(batter.id)}
                                          className="btn btn-success">
                                          Delete
                                      </button>
                                      <Link className="nav-link" to={`/batters/${batter.id}/edit`}> Edit     </Link>
                                      <Link className="nav-link" to={`/batters/${batter.id}`}>  Details </Link>
                                    </div>
                                  </div>
                          )
    return (
      <React.Fragment>
                   <section className="batters">
          <h2>Your Batting Practices</h2>
            <div className="card-items">
            {sortedBatterItems}</div>
          </section>
          <div className="batterBtn">
            <button type="button"
                    className="btn btn-success"
                    onClick={() => {
                      this.props.history.push("/batters/new")}
                    }>
                    Add Session
            </button>
          </div>


      </React.Fragment>
    )
  }
}
