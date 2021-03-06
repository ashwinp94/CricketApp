const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/batters/${id}`).then(e => e.json());
  },
  getAll() {
    return fetch(`${remoteURL}/batters`).then(e => e.json());
  },
  getYourBatters(id){
    return fetch(`${remoteURL}/batters?userId=${id}`).then(e => e.json());
  },
  put(batterId, existingBatters) {
    return fetch(`${remoteURL}/batters/${batterId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify(existingBatters)
    }).then(data => data.json())
  },
  post(newBatters) {
    return fetch(`${remoteURL}/batters`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBatters)
    }).then(data => data.json());
  }
};