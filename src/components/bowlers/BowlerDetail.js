import React, { Component } from "react"
import {Link} from "react-router-dom"



export default class BowlerDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const bowler = this.props.bowlers.find(o => o.id === parseInt(this.props.match.params.bowlerId)) || {}

        return (
            <section className="bowler">
                <div key={bowler.id} className="card">
                    <div className="card-body">
                        <div className="card-title">
                        <h3>Date: {bowler.bowlDate}</h3>
                        <p>Runs Conceded: {bowler.runsConceded}</p>
                        <p>Total Overs Bowled: {bowler.oversBowled}</p>
                        <p>Wickets: {bowler.wickets}</p>
                        <p>Extras: {bowler.extras}</p>
                        </div>
                        <a href="#"
                            onClick={() => this.props.deleteBowler(bowler.id)
                            .then(() => this.props.history.push("/bowlers"))}
                            className="card-link">Delete </a>
                        <Link className="nav-link" to={`/bowlers/${bowler.id}/edit`}>Edit</Link>
                        <Link className="nav-link" to={`/bowlers`}>  Go Back </Link>

                    </div>
                </div>
            </section>
        )
    }
}