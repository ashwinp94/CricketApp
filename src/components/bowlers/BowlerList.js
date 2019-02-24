import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment"
import { Card, Button, CardText, } from 'reactstrap';

export default class BowlerList extends Component {
  render() {
    const sortedBowlerItems = [].concat(this.props.bowlers)
      .sort((a, b) => { return new Date(a.bowlDate) - new Date(b.bowlDate) })
      .reverse()
      .map(bowler =>
        <div key={bowler.id} className="card">
        <Card color="primary"
            body outline="info">
          <div className="card-body">
            <CardText tag="h3">Date: {moment(bowler.bowlDate).format('MMMM Do YYYY')} </CardText>
            <Button type="button"
              id="deleteButton"
              onClick={() => this.props.deleteBowler(bowler.id)}
              className="btn btn-success">
              Delete
              </Button>
              <Button tag={Link} color="primary" className="nav-link" to={`/bowlers/${bowler.id}/edit`}> Edit     </Button>
              <Button tag={Link} color="info" className="nav-link" to={`/bowlers/${bowler.id}`}>  Details </Button>
          </div>
          </Card>
        </div>
      )

    return (
      <React.Fragment>
        <div id="home">
          <section className="bowlers">
            <h2>Your Bowling Practice Sessions</h2>
            <div className="card-items">{sortedBowlerItems}</div>
          </section>
          <div className="eventBtn">
            <button type="button"
              className="btn btn-success"
              onClick={() => {
                this.props.history.push("/bowlers/new")
              }
              }>
              Add Bowling Session
            </button>
          </div>
        </div>
      </React.Fragment>
        )
      }
}
