import React from 'react';
import ListingsContainer from '../ListingsContainer';
import Listing from '../Listing';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('ListingsContainer', () => {
  const listings = [
    {
      id: 1,
      score: "58",
      author: "michael_scott",
      title: "World's best boss",
      url: "/the_office"
    },
    {
      id: 2,
      score: "100",
      author: "dwight_schrute",
      title: "Jim is my enemy",
      url: "/the_office"
    }
  ];
  const component = shallow(<ListingsContainer listings={listings} />);

  it('renders a Listing component for every given listing', () => {
    const listingComponents = component.find(Listing);

    expect(listingComponents.length).toEqual(2);

    listingComponents.forEach((listing, index) => {
      expect(listing.props()).toEqual({
        score: listings[index].score,
        author: listings[index].author,
        title: listings[index].title,
        url: listings[index].url,
      });
    });
  });
});
