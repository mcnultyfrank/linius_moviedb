import React from "react";
import { render } from "@testing-library/react";
import MovieCardContainer from "./MovieCardContainer";

describe("MovieCardContainer tests", () => {
  it("should render", () => {
    expect(render(<MovieCardContainer />)).toBeTruthy();
  });
});
