import React, { Component } from "react";
export default class BatterList extends Component {
  render() {
    const sortedBatterItems = [].concat(this.props.batters)
                          .sort((a,b) => {return new Date(a.batDate) - new Date(b.batDate)})
                          .map(batter =>
                                  <div key={batter.id} className="card">
                                    <div className="card-body">
                                      <p>{batter.runsScored}</p>
                                      <p>{batter.ballsFaced}</p>
                                      <p>{batter.numberofFours}</p>
                                      <p>{batter.numberofSixes}</p>
                                      <p>{batter.batDate}</p>
                                      {/* <Link className="nav-link" to={`/batters/${batter.id}/edit`}>Edit</Link> */}
                                    </div>
                                  </div>
                          )

    return (
      <React.Fragment>
          {/* <div className="eventBtn">
            <button type="button"
                    className="btn btn-success"
                    onClick={() => {
                      this.props.history.push("/events/new")}
                    }>
                    Add Event
            </button>
          </div> */}

          <section className="batters">
          <h2>Your Batting Practices</h2>
            <div className="card-items">{sortedBatterItems}</div>
          </section>

      </React.Fragment>
    )
  }
}
