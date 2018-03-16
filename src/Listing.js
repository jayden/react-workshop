import React from 'react';
import { decode } from  './utils/entityDecoder';

export default function Listing(props) {
  return (
    <tr className="listing">
      <td className="scoreContainer">
        <p className="score">{props.score}</p>
      </td>
      <td className="titleContainer">
        <p className="title">
          <a href={decode(props.url)}>{decode(props.title)}</a>
        </p>
        <p className="author">
          <i>{props.author}</i>
        </p>
      </td>
    </tr>
  );
}
