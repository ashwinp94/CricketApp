import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Button, CardText , } from 'reactstrap';
import moment from "moment"
export default class BatterList extends Component {

  render() {
    const sortedBatterItems = [].concat(this.props.batters)
                          .sort((a,b) => {return new Date(a.batDate) - new Date(b.batDate)})
                          .reverse()
                          .map(batter =>
                                  <div key={batter.id} className="card">
                            <Card color="primary"
                                  body outline ="info">
                                    <div className="card-body">
                                      <CardText tag="h3">Date: {moment(batter.batDate).format('MMMM Do YYYY')}</CardText>
                                      <Button type="button"
                                          id="deleteButton"
                                          onClick={() => this.props.deleteBatter(batter.id)}
                                          className="btn btn-success">
                                          Delete
                                      </Button>
                                      <Link className="nav-link" to={`/batters/${batter.id}/edit`}> Edit     </Link>
                                      <Link className="nav-link" to={`/batters/${batter.id}`}>  Details </Link>
                                    </div>
                                  </Card>
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
