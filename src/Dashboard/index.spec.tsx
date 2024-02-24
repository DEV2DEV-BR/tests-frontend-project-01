import { render, screen } from "@testing-library/react";
import Dashboard from ".";

describe("Testa o component Dashboard", () => {
  test("Deve haver um título na página", async () => {
    render(<Dashboard />);

    const title = await screen.findByRole("heading");

    expect(title).toHaveTextContent("Dashboard");
  });
});
