import React, { Component } from 'react';
import { connect } from 'react-redux';
import EncounterRow from '../components/EncounterRow';

export class EncounterList extends Component {
  renderList(encounterData) {
    const id = encounterData.id;
    const name = encounterData.name;

    return (
        <EncounterRow key={id} name={name} id={id} />
    );
  }
  render() {
    const encounterList = (this.props.encounters.length > 0 ? this.props.encounters[0] : []);
    return (
      <div className="actorList">
        {encounterList.map(this.renderList)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { encounters };
}

export default connect(mapStateToProps)(EncounterList);
