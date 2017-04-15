import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import EncounterList from '../containers/encounter_list';
import { fetchEncounters } from '../actions/index';

class Encounters extends Component {
  componentWillMount() {
    this.props.fetchEncounters();
  }

  render() {
    return (
      <div className="app">
        <div className="app__header">
          <div className="app__header__title">Encounters</div>
        </div>
        <div className="app__body">
          <EncounterList encounters={encounters} />
        </div>
        <div className="app__footer">
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { all };
}

export default connect(mapStateToProps)(Encounters);
