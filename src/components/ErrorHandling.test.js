import { render, screen } from "@testing-library/react";
import ErrorHandling from "./ErrorHandling";


describe("check elements in HandleError component", () => {

    test("Check Something went wrong text exists", () => {
        render(<ErrorHandling />);
        const errorText = screen.getByText(/something went wrong/i);
        expect(errorText).toBeInTheDocument();
    });

    test("Check refresh page button", () => {
        render(<ErrorHandling />);
        const refreshPageButton = screen.getByText(/refresh page/i);
        expect(refreshPageButton).toBeInTheDocument();
    });
});