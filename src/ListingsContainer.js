import React from 'react';
import Listing from './Listing';

export default function ListingsContainer(props) {
  return(
    <table id='listings'>
      <tbody>
        { renderListings(props.listings) }
      </tbody>
    </table>
  );
}

const renderListings = (listings) => {
  return listings.map(listing => {
    return (
      <Listing
        key={listing.id}
        title={listing.title}
        author={listing.author}
        url={listing.url}
        score={listing.score} />
    );
  });
}
