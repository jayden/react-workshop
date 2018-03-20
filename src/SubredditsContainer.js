import React from 'react';
import Subreddit from './Subreddit';
import './stylesheets/SubredditsContainer.css';

export default function SubredditsContainer(props) {
  return(
    <div id='subreddits'>
      <div id='header'>Subreddits</div>
      <ul>
        { renderSubreddits(props) }
      </ul>
    </div>
  );
}

function renderSubreddits(props) {
  return props.subreddits.map(item => {
    return (
      <Subreddit
        key={item.id}
        isActive={props.activeSubreddit === item.display_name}
        name={item.display_name}
        activate={props.setActiveSubreddit}
        url={item.url} />
    );
  });
}
