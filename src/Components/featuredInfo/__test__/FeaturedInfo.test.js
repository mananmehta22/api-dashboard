import { React } from "react";
import { MockedProvider } from "@apollo/react-testing";
import { FeaturedInfo, FETCH_API } from "../FeaturedInfo";
import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";
import { cleanup } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import '@testing-library/jest-dom/extend-expect';

configure({ adapter: new Adapter() });

const mockData = [
  {
    request: { query: FETCH_API },
    result: {
      data: {
        getUpcoming: "2",
        getPast: "109",
        getAll: "111",
      },
    },
  },
];

afterEach(cleanup);

it("renders data", async () => {
  let component;
  await act(async () => {
    component = mount(
      <MockedProvider addTypename={false} mocks={mockData}>
        <FeaturedInfo />
      </MockedProvider>
    );
  });

  component.update();
  expect(component).toBeTruthy();
  //expect(component.find(".featuredLaunchedContainer")).toHaveTextContent('featuredUpcoming');
});
