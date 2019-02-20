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
            userId: parseInt(this.state.userId),
            oversBowled: parseInt(this.state.oversBowled),
            runsConceded: parseInt(this.state.runsConceded),
            wickets: parseInt(this.state.wickets),
            extras: parseInt(this.state.extras),
            bowlDate: this.state.bowlDate
        };

        // Create the animal and redirect user to animal list
        this.props.addBowler(Bowler)
            .then(() => this.props.history.push("/bowlers"));
    }

    render() {
        return (
            <React.Fragment>
                <div id="home">
                    <form className="BowlerForm">
                        <div className="form-group">
                            <label htmlFor="oversBowled">Add Overs: </label>
                            <input type="number" required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="oversBowled"
                                placeholder="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="runsConceded">Runs Conceded</label>
                            <input type="number" required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="runsConceded"
                                placeholder="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="wickets">Wickets: </label>
                            <input type="number" required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="wickets"
                                placeholder="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="extras">Extras: </label>
                            <input type="number" required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="extras"
                                placeholder="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Date</label>
                            <input type="date" required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="bowlDate"
                                placeholder="" />
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
                </div>
            </React.Fragment>
        )
    }
}