import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMonsters } from '../actions/index';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  componentWillMount() {
    this.props.fetchMonsters('');
  }
  onInputChange(event) {
    this.props.fetchMonsters(event.target.value);
    this.setState({ term: event.target.value });
  }
  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchMonsters(this.state.term);
    this.setState({ term: '' });
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Search for…"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMonsters }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
