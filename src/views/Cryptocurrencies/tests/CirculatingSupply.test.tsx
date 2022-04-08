import { render, screen } from "@testing-library/react";
import CirculatingSupply from "../CirculatingSupply";

test("should render CirculatingSupply component", () => {
    render(
        <CirculatingSupply
            maxSupply="1000000"
            circulatingSupply="500000"
            currency="USD"
        />
    );
    const element = screen.getByTestId("CirculatingSupply");
    expect(element).toBeInTheDocument();
});
