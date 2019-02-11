const remoteURL = "http://localhost:5002";

export default {
  searchUsers(query) {
    return fetch(`${remoteURL}/users?q=${query}`).then(e => e.json());
  },
  post(newFriend) {
    return fetch(`${remoteURL}/friends`, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify(newFriend)
    }).then(data => data.json())
  },
}