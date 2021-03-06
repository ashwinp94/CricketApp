const remoteURL = "http://localhost:5002";

export default {
  getUser(id) {
    return fetch(`${remoteURL}/users/${id}`).then(e => e.json());
  },
  getAll() {
    return fetch(`${remoteURL}/users`).then(e => e.json());
  },
  getUsernameAndPassword(username, password) {
    return fetch(`${remoteURL}/users?username=${username}&password=${password}`)
      .then(response => response.json())
  },
  getUsername(username) {
    return fetch(`${remoteURL}/users?username=${username}`)
      .then(response => response.json())
  },
  put(id, existingUser) {
    return fetch(`${remoteURL}/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify(existingUser)
    }).then(data => data.json())
  },

  post(newUser) {
    return fetch(`${remoteURL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    }).then(data => data.json());
  }
};