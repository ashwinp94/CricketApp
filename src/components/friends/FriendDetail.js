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
            <React.Fragment>
                             <section className="friendsData">
            {
                friends.map(friend =>
                <div key={friend.id} className="card">
                    <h4>{friend.username}</h4>
                    <h4>{friend.age}</h4>
                    <h4 id ="roles">{friend.role}</h4>
                    <h4>Batting Stats</h4>
                        {
                            friend.batters.map(bat =>
                                <section key = {bat.id} id= "practices">
                                    <h3>{bat.batDate}</h3>
                                    <p>{"Runs Scored: "}{bat.runsScored}</p>
                                    <p>{"Balls Faced: "}{bat.ballsFaced}</p>
                                    <p>{"# of 4's: "}{bat.numberofFours}</p>
                                    <p>{"# of 6's: "}{bat.numberofSixes}</p>
                                    <p>Average: {bat.runsScored / bat.ballsFaced * 100}</p>
                                </section>
                        )}
                </div>
                )}

                {/* bowling section  */}

                <section> Bowling Stats
                {
                    bowling.map(bowler=>
                    <div key={bowler.id} className="card">

                        {
                            bowler.bowlers.map(bowl =>
                                <section id= "practices">
                                    <h3>{bowl.bowlDate}</h3>
                                    <p>{"Overs Bowled: "}{bowl.oversBowled}</p>
                                    <p>{"Runs Conceded: "}{bowl.runsConceded}</p>
                                    <p>{"Wickets: "}{bowl.wickets}</p>
                                    <p>{"Extras: "}{bowl.extras}</p>
                                    <p>Final Figures: {bowl.wickets}{"/"}{(bowl.extras + bowl.runsConceded)}</p>
                                    <p>Average: {(bowl.extras + bowl.runsConceded)/ bowl.oversBowled}</p>
                                </section>
                        )}

                    </div>
                )}
                </section>

                {/* events section */}

                <section> Their Events
                {
                    events.map(event=>
                    <div key={event.id} className="card">

                        {
                            event.events.map(even =>
                                <section id= "practices">
                                    <h3>{even.eventDate}</h3>
                                    <p>{"Event Name: "}{even.eventName}</p>
                                    <p>{"Event Time: "}{even.eventTime}</p>
                                    <p>{"Location: "}{even.eventLocation}</p>
                                </section>
                        )}

                    </div>
                )}
                </section>

                <div className="card-body">
                        <Link className="nav-link" to={`/friends`}>Go Back </Link>
                    </div>
            </section>
            </React.Fragment>
        )
    }
}
