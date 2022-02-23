import { React } from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { FeaturedInfo, FETCH_API } from '../FeaturedInfo';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});
const mocks =
    {
request: {
    query: FETCH_API,
},
result: {
    data: {
        getUpcoming: "2",
        getPast: "109",
        getAll: "111"
    },
},
};

it('renders data', () => {
    const component = shallow(
      <MockedProvider addTypename={false} mocks={mocks}>
        <FeaturedInfo />
      </MockedProvider>,
    );

    expect(component).toBeTruthy();
    const up = component.children.findByType('div')
    expect(up).toContain('2')
});