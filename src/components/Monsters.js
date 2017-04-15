import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import ActorList from '../containers/actor_list';

class Monsters extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__header">
          <div className="app__header__title">Monsters</div>
        </div>
        <div className="searchBar">
          <SearchBar />
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

export default Monsters;
