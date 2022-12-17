import { render } from "@testing-library/react";
import LoadingSpinner from "./LoadingSpinner";

test("Check if spinner class exists in LoadingSpinner component", () => {
    render(<LoadingSpinner />);
    const spinner = document.querySelector(".spinner");
    expect(spinner).toBeInTheDocument();
    expect(spinner).toBeVisible();
  });