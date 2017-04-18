import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchEncounters } from '../actions/index';
import EncounterRow from './EncounterRow';

class Encounters extends Component {
  componentWillMount() {
    this.props.fetchEncounters();
  }

  listEncounters() {
    return this.props.encounters.map((encounter) => {
      return (
        <EncounterRow key={encounter.id} encounter={encounter} />
      );
    })
  }

  render() {
    return (
      <div className="app">
        <div className="app__header">
          <div className="app__header__title">Encounters</div>
        </div>
        <div className="app__body">
          {this.listEncounters()}
        </div>
        <div className="app__footer">
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { encounters: state.encounters.all };
}

export default connect(mapStateToProps, { fetchEncounters })(Encounters);
