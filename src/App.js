import React from 'react';
import ListingsContainer from './ListingsContainer';
import SubredditsContainer from './SubredditsContainer';
import { getListings, getSubreddits } from './utils/client';
import './stylesheets/App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { subreddits: [], listings: [] };
  }

  componentDidMount() {
    getSubreddits()
      .then(subreddits => this.setState({ subreddits }));
  }

  setActiveSubreddit(subreddit) {
    getListings(subreddit)
      .then(listings => this.setState({ listings }));
  }

  render() {
    return(
      <div id="app">
        <ListingsContainer listings={this.state.listings} />
        <SubredditsContainer
          subreddits={this.state.subreddits}
          setActiveSubreddit={this.setActiveSubreddit.bind(this)} />
      </div>
    );
  }
}
