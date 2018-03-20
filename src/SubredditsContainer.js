import React from 'react';
import Subreddit from './Subreddit';
import './stylesheets/SubredditsContainer.css';

export default function SubredditsContainer(props) {
  return(
    <div id='subreddits'>
      <div id='header'>Subreddits</div>
      <ul>
        { renderSubreddits(props.subreddits, props.setActiveSubreddit) }
      </ul>
    </div>
  );
}

function renderSubreddits(subreddits, setActiveSubreddit) {
  return subreddits.map(item => {
    return (
      <Subreddit
        key={item.id}
        name={item.display_name}
        activate={setActiveSubreddit}
        url={item.url} />
    );
  });
}
