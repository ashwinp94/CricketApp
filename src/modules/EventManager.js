const remoteURL = "http://localhost:5002";

export default  {
  get(id) {
    return fetch(`${remoteURL}/events/${id}`).then(e => e.json());
  },
  getAll() {
    return fetch(`${remoteURL}/events`).then(e => e.json());
  },
  getYourEvents(id){
      return fetch(`${remoteURL}/events?userId=${id}`).then(e => e.json());
  },
  //POST for adding new event
  post(newEvent) {
    return fetch(`${remoteURL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify(newEvent)
    }).then(data => data.json())
  },
  //PUT fetch for edit functionality
  put(eventId, existingEvent) {
    return fetch(`${remoteURL}/events/${eventId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify(existingEvent)
    }).then(data => data.json())
  }
}