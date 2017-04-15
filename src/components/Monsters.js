import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import SearchBar from '../containers/search_bar';
import ActorList from '../containers/actor_list';
import { fetchMonsters } from '../actions/index';

class Monsters extends Component {
  componentWillMount() {
    this.props.fetchMonsters('');
  }
  render() {
    return (
      <div className="app">
        <div className="app__header">
          <div className="app__header__title">Monsters</div>
        </div>
        <div className="searchBar">
        </div>
        <div className="app__body">
          <ActorList />
        </div>
        <div className="app__footer">
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMonsters }, dispatch);
}

export default connect(null, mapDispatchToProps)(Monsters);
