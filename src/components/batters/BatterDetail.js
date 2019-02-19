import React, { Component } from "react"
import {Link} from "react-router-dom"
import moment from "moment"
export default class BatterDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const batter = this.props.batters.find(o => o.id === parseInt(this.props.match.params.batterId)) || {}

        return (
            <React.Fragment>
            <div id="home">
     <section className="batter">
                <div key={batter.id} className="card">
                    <div className="card-body">
                        <div className="card-title">
                        <h3>Date: {moment(batter.batDate).format('MMMM Do YYYY')}</h3>
                        <p>Runs Scored: {batter.runsScored}</p>
                        <p>Total Balls Played: {batter.ballsFaced}</p>
                        <p>Number of Fours Hit: {batter.numberofFours}</p>
                        <p>Number of Sixes: {batter.numberofSixes}</p>
                        <p>Average: {batter.runsScored / batter.ballsFaced * 100}</p>
                        </div>
                        <a href="#"
                            onClick={() => this.props.deleteBatter(batter.id)
                                .then(() => this.props.history.push("/batters"))}
                                className="card-link">Delete</a>
                        <Link className="nav-link" to={`/batters/${batter.id}/edit`}>Edit</Link>
                        <Link className="nav-link" to={`/batters`}>Go Back </Link>

                    </div>
                </div>
            </section>
            </div>
            </React.Fragment>
        )
    }
}