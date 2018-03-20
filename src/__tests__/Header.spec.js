import React from 'react';
import Header from '../Header';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Header', () => {
  it('renders a title', () => {
    const title = 'Heyo';
    const component = shallow(<Header title={title} />);

    expect(component.props().children).toEqual(title);
  });
});
