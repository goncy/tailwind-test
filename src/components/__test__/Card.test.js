import React from "react";
import { render, cleanup } from "@testing-library/react";

import Card from "../Card";

afterEach(cleanup);

it("shows the title", () => {
  const { baseElement } = render(
    <Card image="//placehold.it/128" tags={["sunset", "beach"]} title="Live in Bali">
      If you really like beaches you can come here
    </Card>
  );

  expect(baseElement).toHaveTextContent("Live in Bali");
});

it("renders", () => {
  const { asFragment } = render(
    <Card image="//placehold.it/128" tags={["sunset", "beach"]} title="Live in Bali">
      If you really like beaches you can come here
    </Card>
  );

  expect(asFragment()).toMatchSnapshot();
});
