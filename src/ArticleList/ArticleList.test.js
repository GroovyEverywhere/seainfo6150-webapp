import React from "react";
import ArticleList from "./ArticleList.jsx";
import { fireEvent } from "@testing-library/react";

describe("ArticleList tests", () => {
  it("renders correctly", () => {
    const { container } = render(<div />);
    expect(container).toMatchSnapshot();
  });

});
