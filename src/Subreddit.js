import React from 'react';

export default class Subreddit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
  }

  onClick() {
    this.setState({ isActive: true });
    this.props.activate(this.props.url);
  }

  render() {
    return (
      <li onClick={this.onClick.bind(this)} className={this.state.isActive ? 'active' : ''}>
        {this.props.name}
      </li>
    );
  }
}
