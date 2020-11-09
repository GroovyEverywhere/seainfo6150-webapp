import React from "react";
import ArticleTextToggleButton from "./ArticleTextToggleButton.jsx";
import { fireEvent } from "@testing-library/react";

describe("ArticleTextToggleButton tests", () => {

  it("renders correctly after button is clicked", () => {
    const { container, getByText } = render(
      <ArticleTextToggleButton />
    );
    expect(container).toMatchSnapshot();
  });
});
