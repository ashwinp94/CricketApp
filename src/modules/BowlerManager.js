const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/bowlers/${id}`).then(e => e.json());
  },
  getAll() {
    return fetch(`${remoteURL}/bowlers`).then(e => e.json());
  },
  getYourBowlers(id){
    return fetch(`${remoteURL}/bowlers?userId=${id}`).then(e => e.json());
  },
  put(bowlerId, existingBowlers) {
    return fetch(`${remoteURL}/bowlers/${bowlerId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify(existingBowlers)
    }).then(data => data.json())
  },
  post(newBowlers) {
    return fetch(`${remoteURL}/bowlers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBowlers)
    }).then(data => data.json());
  }
};