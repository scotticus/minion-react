import _ from 'lodash';
import React from 'react';

export default (props) => {
  return (
      <div className="actor">
        <div className="actor__name">{props.name}</div>
        <div className="stat actor__challengeRating">
          <span className="label">CR</span>
          <span className="value">{props.challenge}</span>
        </div>
        <div className="stat actor__armorClass">
          <span className="label">AC</span>
          <span className="value">{props.armorClass}</span>
        </div>
      </div>
  );
};
