import { React } from "react";
import { MockedProvider } from "@apollo/react-testing";
import { FeaturedInfo, FETCH_API } from "../FeaturedInfo";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import { cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TestRenderer, { act } from "react-test-renderer";
import { wait } from "@testing-library/user-event/dist/utils";

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

  let component;
  act(() => {
    component = TestRenderer.create(
      <MockedProvider addTypename={false} mocks={mockData}>
        <FeaturedInfo />
      </MockedProvider>
    );
  });

  await act(wait);

  const tree = component.toJSON();
  await waitFor(() => {
    expect(tree).toMatchSnapshot();
  });
});

it("should show UI error", async () => {
  const mockData = {
    request: { query: FETCH_API },
    error: new Error("Error :("),
  };
  let component;
  act(() => {
    component = TestRenderer.create(
      <MockedProvider addTypename={false} mocks={[mockData]}>
        <FeaturedInfo />
      </MockedProvider>
    );
  });
  await act(wait);

  const tree = component.toJSON();
  await waitFor(() => {
    expect(tree.children).toContain("Error :(");
  });
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
  expect(p.children).toContain("Loading...");
});
