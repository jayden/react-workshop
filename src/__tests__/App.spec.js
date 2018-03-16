import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import ListingsContainer from '../ListingsContainer';
import SubredditsContainer from '../SubredditsContainer';
import * as client from '../utils/client';

configure({ adapter: new Adapter() });

describe('App', () => {
  const subreddits = [
    { id: 1, display_name: "subreddit1", url: "/subreddit1" },
    { id: 2, display_name: "subreddit2", url: "/subreddit2" }
  ];
  const listings = [
    {
      id: 1,
      title: "best listing",
      author: "michael_scott",
      url: "/subreddit1",
      score: 50
    },
  ];

  let app;

  beforeEach(() => {
    client.getSubreddits = jest.fn()
      .mockImplementation(() => Promise.resolve(subreddits));
    client.getListings = jest.fn()
      .mockImplementation(() => Promise.resolve(listings));

    app = mount(<App />);
  });

  it('triggers client to request popular subreddits', () => {
    expect(client.getSubreddits).toHaveBeenCalled();
    expect(app.state("subreddits")).toEqual(subreddits);
  });

  it('renders SubredditsContainer with correct props', () => {
    const subredditsContainer = app.update().find(SubredditsContainer);

    expect(subredditsContainer.exists()).toEqual(true);

    const props = subredditsContainer.props();
    expect(props).toEqual({
      subreddits: app.state("subreddits"),
      setActiveSubreddit: expect.any(Function)
    });

    props.setActiveSubreddit("awesome-subreddit");

    expect(client.getListings).toHaveBeenCalledWith("awesome-subreddit");
  });

  it('renders ListingsContainer with correct props', () => {
    const listingsContainer = app.update().find(ListingsContainer);

    expect(listingsContainer.exists()).toEqual(true);

    expect(listingsContainer.props()).toEqual({ listings: app.state("listings") });
  });
});
