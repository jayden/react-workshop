import React from 'react';
import SubredditsContainer from '../SubredditsContainer';
import Subreddit from '../Subreddit';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('SubredditsContainer', () => {
  const setActiveSubreddit = jest.fn();
  const subreddits = [
    { id: 1, display_name: "The Office", url: "/the_office" },
    { id: 2, display_name: "Parks & Recreation", url: "/parks_and_recreation" }
  ];
  const component = shallow(
      <SubredditsContainer subreddits={subreddits}
        setActiveSubreddit={setActiveSubreddit} />);

  it('renders a Subreddit component for every given subreddit', () => {
    const subredditComponents = component.find(Subreddit);

    expect(subredditComponents.length).toEqual(2);

    subredditComponents.forEach((subreddit, index) => {
      expect(subreddit.props()).toEqual({
        name: subreddits[index].display_name,
        activate: setActiveSubreddit,
        url: subreddits[index].url
      });
    });
  });
});
