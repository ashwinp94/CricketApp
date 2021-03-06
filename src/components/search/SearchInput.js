import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./SearchInput.css"
class SearchInput extends Component {
  // Set initial state
  state = {
    searchQuery: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  handleSearch = evt => {
    evt.preventDefault()
    this.props.searchAllData(this.state.searchQuery)
      .then(() => this.props.history.push("/searchResults"))
  }

  render() {
    return (
      <React.Fragment>
        <div id="home">
          <Form onSubmit={this.handleSearch}>
            <FormGroup>
              <h2 color=" white">Find Friends!</h2>
              {/* The id of the input matches the key of the property that reflects the user input in state so that we can write a reusable method (handleFieldChange) to update state for all input fields */}
              <Input
                type="text"

                onChange={this.handleFieldChange}
                id="searchQuery" />
            </FormGroup>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(SearchInput)