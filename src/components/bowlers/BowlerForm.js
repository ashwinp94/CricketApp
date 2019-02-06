import React, { Component } from "react"


export default class BowlerForm extends Component {
    // Set initial state

    state = {
        userId: Number(sessionStorage.getItem("user")),
        oversBowled: [],
        runsConceded: [],
        wickets: [],
        extras: [],
        bowlDate: [],
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
            const Bowler = {
                userId: this.state.userId,
                oversBowled: this.state.oversBowled,
                runsConceded: this.state.runsConceded,
                wickets: this.state.wickets,
                extras: this.state.extras,
                bowlDate: new Date()
            };

            // Create the animal and redirect user to animal list
            this.props.addBowler(Bowler)
            .then(() => this.props.history.push("/bowlers"));
        }

    render() {
        return (
            <React.Fragment>
                <form className="BowlerForm">
                    <div className="form-group">
                        <label htmlFor="oversBowled">Add Overs: </label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="oversBowled"
                               placeholder="oversBowled" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="runsConceded">Runs Conceded</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="runsConceded"
                               placeholder="runsConceded" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="wickets">Wickets: </label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="wickets"
                               placeholder="wickets" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="extras">Extras: </label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="extras"
                               placeholder="extras" />
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