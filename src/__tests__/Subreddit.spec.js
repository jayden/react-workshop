import React from 'react';
import Subreddit from '../Subreddit';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Subreddit', () => {
  const subreddit = { activate: jest.fn(), name: "Stranger Things", url: "/stranger_things" };
  const component = shallow(
      <Subreddit activate={subreddit.activate}
        name={subreddit.name}
        url={subreddit.url} />);

  it('renders the name and correct props for a given subreddit', () => {
    const name = component.find('li');
    expect(name.length).toEqual(1);

    const props = name.props();
    expect(props.children).toEqual(subreddit.name);
    expect(props.className).toEqual('');
    expect(props.onClick).toEqual(expect.any(Function));
  });

  it("updates the className to 'active' and invokes activate prop on click", () => {
    const props = component.props();
    expect(props.className).toEqual('');

    props.onClick();
    component.update();

    expect(component.props().className).toEqual('active');
    expect(subreddit.activate).toHaveBeenCalledWith(subreddit.url);
  });
});
