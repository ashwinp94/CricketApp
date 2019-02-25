import React, { Component } from "react"
import { Link } from "react-router-dom"
import FriendManager from "../../modules/FriendManager"
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import moment from "moment"
import "./FriendDetail.css"

export default class FriendDetail extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this)
        this.toggle1 = this.toggle1.bind(this)
        this.toggle2 = this.toggle2.bind(this)

        this.state = {
            collapse: false,
            collapse1: false,
            collapse2: false,

            friendsBattingPractices: [],
            friendsBowlingPractices: [],
            friendsEvents: [],
        }
    }
    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    toggle1() {
        this.setState({ collapse1: !this.state.collapse1 });
    }
    toggle2() {
        this.setState({ collapse2: !this.state.collapse2 });
    }


    showBatting() {
        let friendsData = [];
        FriendManager.getFriendsPractice(this.props.match.params.id)
            .then(allPractices => {
                friendsData.push(allPractices)
            })
            .then(() => this.setState({
                friendsBattingPractices: friendsData
            }))

    }

    showBowling() {
        let friendsData = [];
        FriendManager.getFriendsOtherPractice(this.props.match.params.id)
            .then(allPractices => {
                friendsData.push(allPractices)
            })

            .then(() => this.setState({
                friendsBowlingPractices: friendsData
            }));
    }

    showEvents() {
        let friendsData = [];
        FriendManager.getFriendsEvents(this.props.match.params.id)
            .then(allEvents => {
                friendsData.push(allEvents)
            })

            .then(() => this.setState({
                friendsEvents: friendsData
            }));
    }


    componentDidMount() {
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
                <div id="home">
                    <section className="friendsData">
                        {
                            friends.map(friend =>
                                <div key={friend.id}>
                                    <h4>{friend.username}</h4>
                                    <h4>{friend.age}</h4>
                                    <h4 id="roles">{friend.role}</h4>
                                    <section id="allPractices">
                                        <Button id="bPractice" color="success" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Batting Practices</Button>
                                        <Collapse isOpen={this.state.collapse}>

                                            {
                                                friend.batters.map(bat =>
                                                    <Card>
                                                        <CardBody>
                                                            <section key={bat.id} id="practices">
                                                                <h3>{moment(bat.batDate).format('MMMM Do YYYY')}</h3>
                                                                <p>{"Runs Scored: "}{bat.runsScored}</p>
                                                                <p>{"Balls Faced: "}{bat.ballsFaced}</p>
                                                                <p>{"# of 4's: "}{bat.numberofFours}</p>
                                                                <p>{"# of 6's: "}{bat.numberofSixes}</p>
                                                                <p>Average: {bat.runsScored / bat.ballsFaced * 100}</p>
                                                            </section>
                                                        </CardBody>
                                                    </Card>
                                                )}
                                        </Collapse>
                                    </section>
                                </div>
                            )}

                        {/* bowling section  */}

                        <section >
                            {
                                bowling.map(bowler =>
                                    <div id="allPractices" key={bowler.id}>
                                        <Button id="bPractice" color="success" onClick={this.toggle1} style={{ marginBottom: '1rem' }}>Bowling Practices</Button>
                                        <Collapse isOpen={this.state.collapse1}>
                                            {
                                                bowler.bowlers.map(bowl =>
                                                    <Card>
                                                        <CardBody>
                                                            <section id="practices">
                                                                <h3>{moment(bowl.bowlDate).format('MMMM Do YYYY')}</h3>
                                                                <p>{"Overs Bowled: "}{bowl.oversBowled}</p>
                                                                <p>{"Runs Conceded: "}{bowl.runsConceded}</p>
                                                                <p>{"Wickets: "}{bowl.wickets}</p>
                                                                <p>{"Extras: "}{bowl.extras}</p>
                                                                <p>Final Figures: {bowl.wickets}{"/"}{(bowl.extras + bowl.runsConceded)}</p>
                                                                <p>Average: {(bowl.extras + bowl.runsConceded) / bowl.oversBowled}</p>
                                                            </section>
                                                        </CardBody>
                                                    </Card>
                                                )}
                                        </Collapse>
                                    </div>
                                )}
                        </section>

                        {/* events section */}

                        <section >
                            {
                                events.map(event =>
                                    <div id="allPractices" key={event.id}>
                                        <Button  id="bPractice" color="success" onClick={this.toggle2} style={{ marginBottom: '1rem' }}>Their Events</Button>
                                        <Collapse isOpen={this.state.collapse2}>
                                            {
                                                event.events.map(even =>
                                                    <Card>
                                                        <CardBody>
                                                            <section id="practices">
                                                                <h3>{moment(even.eventDate).format('MMMM Do YYYY')}</h3>
                                                                <p>{"Event Name: "}{even.eventName}</p>
                                                                <p>{"Event Time: "}{even.eventTime}</p>
                                                                <p>{"Location: "}{even.eventLocation}</p>
                                                            </section>
                                                        </CardBody>
                                                    </Card>
                                                )}
                                        </Collapse>
                                    </div>
                                )}
                        </section>
                        <Button tag={Link} className="nav-link" to={`/friends`}>Go Back </Button>
                    </section>
                </div>
            </React.Fragment>
        )
    }
}
