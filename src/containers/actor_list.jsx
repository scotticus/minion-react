import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actor from '../components/Actor';

export class ActorList extends Component {
  renderList(actorData) {
    // console.log(actorData);
    const id = actorData.id;
    const name = actorData.name;
    const challenge = actorData.challenge;
    const armorClass = actorData.armor_class;

    return (
        <Actor key={id} name={name} challenge={challenge} armorClass={armorClass} />
    );
  }
  render() {
    const actorList = (this.props.actors.length > 0 ? this.props.actors[0] : []);
    return (
      <div className="actorList">
        {actorList.map(this.renderList)}
      </div>
    );
  }
}

function mapStateToProps({ actors }) {
  return { actors };
}

export default connect(mapStateToProps)(ActorList);
