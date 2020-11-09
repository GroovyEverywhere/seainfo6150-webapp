import React from "react";
import ArticleListItem from "./ArticleListItem.jsx";
import { fireEvent } from "@testing-library/react";

describe("ArticleListItem tests", () => {
  it("renders correctly when text is showing", () => {
    const { container } = render(<li />);
    expect(container).toMatchSnapshot();
  });

});
