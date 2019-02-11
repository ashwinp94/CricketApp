const remoteURL = "http://localhost:5002";

export default {

getYourFriends(id) {
    return fetch(`${remoteURL}/friends?currentUserId=${id}&_expand=user`).then(e => e.json());
    },
getFriendsPractice(id){
    return fetch(`${remoteURL}/users/${id}?_embed=batters`).then(e => e.json());
    },

}