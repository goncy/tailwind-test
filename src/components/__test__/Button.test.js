import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import Button from "../Button";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<Button>Buy</Button>);

  expect(asFragment()).toMatchSnapshot();
});

it("renders as small size", () => {
  const { asFragment } = render(<Button size="small">Buy</Button>);

  expect(asFragment()).toMatchSnapshot();
});

it("renders as medium size", () => {
  const { asFragment } = render(<Button size="medium">Buy</Button>);

  expect(asFragment()).toMatchSnapshot();
});

it("renders as default variant", () => {
  const { asFragment } = render(<Button variant="default">Buy</Button>);

  expect(asFragment()).toMatchSnapshot();
});

it("renders as primary variant", () => {
  const { asFragment } = render(<Button variant="primary">Buy</Button>);

  expect(asFragment()).toMatchSnapshot();
});

it("triggers onClick", () => {
  const onClick = jest.fn();

  const { getByText } = render(<Button onClick={onClick}>Buy</Button>);

  fireEvent.click(getByText("Buy"));

  expect(onClick).toHaveBeenCalled();
});
