import React from 'react';
import Subreddit from './Subreddit';

export default function SubredditsContainer(props) {
  return(
    <div className="navigation">
      <div className="header">Navigation</div>
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
