import React, { Component } from "react"

export default class BatterForm extends Component {
    // Set initial state

    state = {
        userId: Number(sessionStorage.getItem("user")),
        runsScored: [],
        ballsFaced: [],
        numberofFours: [],
        numberofSixes: [],
        batDate: [],
    }

    // this.constructNewAnimal = this.constructNewAnimal.bind(this)


    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
    constructNewSession = evt => {
        evt.preventDefault()
            const Batter = {
                userId: this.state.userId,
                runsScored: this.state.runsScored,
                ballsFaced: this.state.ballsFaced,
                numberofFours: this.state.numberofFours,
                numberofSixes: this.state.numberofSixes,
                batDate: new Date()
            };

            // Create the animal and redirect user to animal list
            this.props.addBatter(Batter)
            .then(() => this.props.history.push("/batters"));
        }

    render() {
        return (
            <React.Fragment>
                <form className="BatterForm">
                    <div className="form-group">
                        <label htmlFor="runsScored">Add Runs: </label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="runsScored"
                               placeholder="runsScored" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ballsFaced">Balls Faced</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="ballsFaced"
                               placeholder="ballsFaced" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="numberofFours">4's: </label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="numberofFours"
                               placeholder="numberofFours" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="numberofSixes">6's: </label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="numberofSixes"
                               placeholder="numberofSixes" />
                    </div>

                    {/* <div className="form-group">
                        <label htmlFor="employee">Assign to caretaker</label>
                        <select
                        defaultValue=""
                        name="employee"
                        id="employee"
                                onChange={this.handleFieldChange}>
                            <option value="">Select an employee</option>
                        {
                            this.props.employees.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                        }
                        </select>
                    </div> */}
                    <button type="submit" onClick={this.constructNewSession} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}