import React from 'react';
import { decode } from  './utils/entityDecoder';
import './stylesheets/Listing.css';

export default class Listing extends React.Component {
  state = { className: '' };

  componentWillReceiveProps({ score }) {
    if (score > this.props.score) this.setState({ className: 'inc' });
    else if (score < this.props.score) this.setState({ className: 'dec' });
  }

  render() {
    return (
      <tr className="listing">
        <td className="scoreContainer">
          <p className={`score ${this.state.className}`}>{this.props.score}</p>
        </td>
        <td className="titleContainer">
          <p className="title">
            <a href={decode(this.props.url)}>{decode(this.props.title)}</a>
          </p>
          <p className="author">
            <i>{this.props.author}</i>
          </p>
        </td>
      </tr>
    );
  }
}
