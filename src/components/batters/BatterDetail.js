import React, { Component } from "react"
import { Link } from "react-router-dom"
import moment from "moment"
import {Button} from "reactstrap"
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
                        <div key={batter.id} className="card mx-auto">
                            <div className="card-body">
                                <div className="card-title">
                                    <h3>Date: {moment(batter.batDate).format('MMMM Do YYYY')}</h3>
                                    <p>Runs Scored: {batter.runsScored}</p>
                                    <p>Total Balls Played: {batter.ballsFaced}</p>
                                    <p>Number of Fours Hit: {batter.numberofFours}</p>
                                    <p>Number of Sixes: {batter.numberofSixes}</p>
                                    <p>Strike Rate: {batter.runsScored / batter.ballsFaced * 100}</p>
                                </div>
                                <Button
                                color="success"
                                className="nav-link"
                                    onClick={() => this.props.deleteBatter(batter.id)
                                        .then(() => this.props.history.push("/batters"))}
                                    >Delete</Button>
                                <Button tag= {Link} color="info" className="nav-link" to={`/batters/${batter.id}/edit`}>Edit</Button>
                                <Button tag= {Link} color="warning" className="nav-link" to={`/batters`}>Go Back </Button>

                            </div>
                        </div>
                    </section>
                </div>
            </React.Fragment>
        )
    }
}