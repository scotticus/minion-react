import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchEncounterDetail } from '../actions/index';

class Encounter extends Component {
  componentWillMount() {
    this.props.fetchEncounterDetail(this.props.params.id);
  }

  render() {
    const { encounter } = this.props;
    console.log(this.props.encounter);
    if (!encounter) {
      return <div>Loading…</div>
    }
    return (
      <div className="app">
        <div className="app__header">
          <div className="app__header__title">{this.props.encounter.name}</div>
        </div>
        <div className="app__body">
          Encounter Detail
        </div>
        <div className="app__footer">
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { encounter };
}

export default connect(mapStateToProps, { fetchEncounterDetail })(Encounter);
