const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/roles/${id}`).then(e => e.json());
  },
  getAll() {
    return fetch(`${remoteURL}/roles`).then(e => e.json());
  }
}