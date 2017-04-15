import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  return (
      <div className="actor">
        <div className="actor__name"><Link to={'encounters/' + props.id}>{props.name}</Link></div>
      </div>
  );
};
