import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BatterList.css"
import { Card, Button, CardText, } from 'reactstrap';
import moment from "moment"
export default class BatterList extends Component {

  render() {
    const sortedBatterItems = [].concat(this.props.batters)
      .sort((a, b) => { return new Date(a.batDate) - new Date(b.batDate) })
      .reverse()
      .map(batter =>
        <div key={batter.id} className="card mx-auto">
          <Card color="primary"
            body outline="info">
            <div className="card-body">
              <CardText tag="h3">Date: {moment(batter.batDate).format('MMMM Do YYYY')}</CardText>
              <Button
              color="success"
              onClick={() => this.props.deleteBatter(batter.id)}
              className="nav-link"
              id="deleteButton">
                Delete
                </Button>
              <Button tag={Link} color="primary" className="nav-link" to={`/batters/${batter.id}/edit`}> Edit     </Button>
              <Button tag={Link} color="info" className="nav-link" to={`/batters/${batter.id}`}>  Details </Button>
            </div>
          </Card>
        </div>
      )




    return (
      <React.Fragment>
        <div id="home">
          <section className="batters">
            <h2>Your Batting Practices</h2>
            <div className="card-items">
              {sortedBatterItems}</div>
          </section>
          <div className="batterBtn text-center">
            <Button

              color="success"
              id="addbutton"
              onClick={() => {
                this.props.history.push("/batters/new")
              }
              }>
              Add Session
            </Button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
