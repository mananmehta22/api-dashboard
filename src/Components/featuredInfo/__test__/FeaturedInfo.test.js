import { React } from "react";
import { MockedProvider } from "@apollo/react-testing";
import { FeaturedInfo, FETCH_API } from "../FeaturedInfo";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TestRenderer from "react-test-renderer";

configure({ adapter: new Adapter() });

afterEach(cleanup);

it("render data", async () => {
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

  const component = TestRenderer.create(
    <MockedProvider addTypename={false} mocks={mockData}>
      <FeaturedInfo />
    </MockedProvider>
  );
  
  await new Promise((resolve) => setTimeout(resolve, 1000));


  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("should show UI error", async () => {
  const mockData = {
    request: { query: FETCH_API },
    error: new Error("Error :("),
  };
  const component = TestRenderer.create(
    <MockedProvider addTypename={false} mocks={[mockData]}>
      <FeaturedInfo />
    </MockedProvider>
  );

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const tree = component.toJSON();
  expect(tree.children).toContain("Error :(");
});

it("loading state", async () => {
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
  const component = TestRenderer.create(
    <MockedProvider addTypename={false} mocks={mockData}>
      <FeaturedInfo />
    </MockedProvider>
  );

  
  await new Promise((resolve) => setTimeout(resolve, 0));
  const p = component.toJSON();
  expect(p.children).toContain('Loading...');
});