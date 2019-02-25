import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Button, CardText, } from 'reactstrap';

import moment from "moment"
import "./Events.css"
export default class EventList extends Component {
  render() {
    const sortedEventItems =
      [].concat(this.props.events)
        .sort((a, b) => { return new Date(a.eventDate) - new Date(b.eventDate) })
        .reverse()
        .map(event =>
          <div key={event.id} className="card mx-auto">
          <Card color="primary"
            body outline="info">
            <div className="card-body">
              <CardText tag="h3">{event.eventName}</CardText>
              <p>{moment(event.eventDate).format('MMMM Do YYYY')}</p>
              <p>{event.eventTime}</p>
              <p>{event.eventLocation}</p>
              <Button type="button"
                color="warning"
                id="deleteButton"
                onClick={() => this.props.deleteEvent(event.id)}
                className="nav-link">
                Delete
                                      </Button>
              <Button tag={Link} color ="primary" className="nav-link" to={`/events/${event.id}/edit`}>Edit</Button>
            </div>
            </Card>
          </div>
        )

    return (
      <React.Fragment>
        <div id="home">
          <section className="events">
            <h2>Upcoming Events</h2>
            <div className="card-items">
              {sortedEventItems}
            </div>
          </section>
          <div className="eventBtn text-center">
            <Button type="button"
            color="success"
              id="addbutton"
              onClick={() => {
                this.props.history.push("/events/new")
              }
              }>
              Add Event
            </Button>
          </div>

        </div>
      </React.Fragment>
    )
  }
}
