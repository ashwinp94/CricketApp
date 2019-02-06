const remoteURL = "http://localhost:5002";
// getFriendInChat() {
//     return fetch(`http://localhost:5002/friends?currentUserId=4&_expand=user) //friends?currentUserId=1&_expand=user
//     .then(response => response.json())
//     }
export default {

getYourFriends(id) {
    return fetch(`${remoteURL}/friends?currentUserId=${id}&_expand=user`).then(e => e.json());
    }
}