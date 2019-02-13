import React, { Component } from "react"
import {Link} from "react-router-dom"
import FriendManager from "../../modules/FriendManager"
import "./FriendDetail.css"
export default class FriendDetail extends Component {

    state = {
    friendsBattingPractices: [],
    friendsBowlingPractices: [],
    friendsEvents:[],
}


showBatting(){
    let friendsData = [];
    FriendManager.getFriendsPractice(this.props.match.params.id)
        .then(allPractices => {
            friendsData.push(allPractices)
        })
        .then(() => this.setState({
            friendsBattingPractices: friendsData
    }))

}

showBowling(){
    let friendsData = [];
    FriendManager.getFriendsOtherPractice(this.props.match.params.id)
    .then(allPractices => {
        friendsData.push(allPractices)
    })

    .then(() => this.setState({
        friendsBowlingPractices: friendsData
    }));
}

showEvents(){
    let friendsData = [];
    FriendManager.getFriendsEvents(this.props.match.params.id)
        .then(allEvents => {
            friendsData.push(allEvents)
        })

        .then(() => this.setState({
            friendsEvents: friendsData
    }));
}


componentDidMount(){
    this.showBatting();
    this.showEvents();
    this.showBowling();
}


    render() {
        /*
            Using the route parameter, find the animal that the
            componentDidMount(){
                FriendManager.getFriendsPractice(friendId)
                .then(allPractices => {
                    this.setState({
                        friendsBattingPractices: allPractices
                    })
                  })
            }
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const friends = this.state.friendsBattingPractices.filter(o => o.id === parseInt(this.props.match.params.id))
        const bowling = this.state.friendsBowlingPractices.filter(o => o.id === parseInt(this.props.match.params.id))
        const events = this.state.friendsEvents.filter(o => o.id === parseInt(this.props.match.params.id))
        return (
            <section className="friendsData">
            {
                friends.map(friend =>
                <div key={friend.id} className="card">
                    <h4>{friend.username}</h4>
                    <h4>{friend.age}</h4>
                    <h4 id ="roles">{friend.role}</h4>
                    <h5>Batting Stats</h5>
                        {
                            friend.batters.map(bat =>
                                <section key = {bat.id} id= "practices">
                                    <h5>{bat.batDate}</h5>
                                    <h5>{"Runs Scored: "}{bat.runsScored}</h5>
                                    <h5>{"Balls Faced: "}{bat.ballsFaced}</h5>
                                    <h5>{"# of 4's: "}{bat.numberofFours}</h5>
                                    <h5>{"# of 6's: "}{bat.numberofSixes}</h5>
                                </section>
                        )}
                </div>
                )}

                {/* bowling section  */}

                <h5> Bowling Stats
                {
                    bowling.map(bowler=>
                    <div key={bowler.id} className="card">

                        {
                            bowler.bowlers.map(bowl =>
                                <section id= "practices">
                                    <h5>{bowl.bowlDate}</h5>
                                    <h5>{"Overs Bowled: "}{bowl.oversBowled}</h5>
                                    <h5>{"Runs Conceded: "}{bowl.runsConceded}</h5>
                                    <h5>{"Wickets: "}{bowl.wickets}</h5>
                                    <h5>{"Extras: "}{bowl.extras}</h5>
                                </section>
                        )}

                    </div>
                )}
                </h5>

                {/* events section */}

                <h5> Their Events
                {
                    events.map(event=>
                    <div key={event.id} className="card">

                        {
                            event.events.map(even =>
                                <section id= "practices">
                                    <h5>{even.eventDate}</h5>
                                    <h5>{"Event Name: "}{even.eventName}</h5>
                                    <h5>{"Event Time: "}{even.eventTime}</h5>
                                    <h5>{"Location: "}{even.eventLocation}</h5>
                                </section>
                        )}

                    </div>
                )}
                </h5>

                <div className="card-body">
                        <Link className="nav-link" to={`/friends`}>Go Back </Link>
                    </div>
            </section>
        )
    }
}
