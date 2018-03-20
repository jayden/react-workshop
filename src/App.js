import React from 'react';
import Header from './Header';
import ListingsContainer from './ListingsContainer';
import SubredditsContainer from './SubredditsContainer';
import { getListings, getSubreddits } from './utils/client';
import './stylesheets/App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { subreddits: [], listings: [], activeSubreddit: '' };
  }

  componentDidMount() {
    getSubreddits()
      .then(subreddits => this.setState({ subreddits }));
  }

  setActiveSubreddit(url, activeSubreddit) {
    getListings(url)
      .then(listings => this.setState({ listings, activeSubreddit }));
  }

  render() {
    return(
      <div id="app">
        <Header title={this.state.activeSubreddit} />
        <div>
          <ListingsContainer listings={this.state.listings} />
          <SubredditsContainer
            subreddits={this.state.subreddits}
            activeSubreddit={this.state.activeSubreddit}
            setActiveSubreddit={this.setActiveSubreddit.bind(this)} />
        </div>
      </div>
    );
  }
}
