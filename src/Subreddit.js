import React from 'react';

export default class Subreddit extends React.Component {
  onClick() {
    this.props.activate(this.props.url, this.props.name);
  }

  render() {
    return (
      <li onClick={this.onClick.bind(this)} className={this.props.isActive ? 'active' : ''}>
        {this.props.name}
      </li>
    );
  }
}
