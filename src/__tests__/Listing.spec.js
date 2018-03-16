import React from 'react';
import Listing from '../Listing';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Listing', () => {
  const listing = {
    score: "58",
    author: "michael_scott",
    title: "Tanks",
    url: "/the_office"
  };

  const component = shallow(
      <Listing score={listing.score}
        author={listing.author}
        title={listing.title}
        url={listing.url} />);

  it('renders the author, score, title for a given listing', () => {
    const score = component.find('.score');
    expect(score.length).toEqual(1);
    expect(score.props().children).toEqual(listing.score);

    const title = component.find('.title a');
    expect(title.length).toEqual(1);
    expect(title.props().children).toEqual(listing.title);
    expect(title.props().href).toEqual(listing.url);

    const author = component.find('.author');
    expect(author.length).toEqual(1);
    expect(author.props().children).toEqual(<i>{listing.author}</i>);
  });
});
