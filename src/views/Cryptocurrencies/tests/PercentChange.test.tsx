import { render, screen } from "@testing-library/react";
import PercentChange from "../PercentChange";

test("should render PercentChange component", () => {
    render(<PercentChange percent="12.345678" />);
    const element = screen.getByTestId("PercentChange");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("1,234.57 %");
});
