import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import Nav from "@/components/TopNavBar";

describe("Home('/') Component Test", () => {
  it("should have >main< text !THIS IS VERY FIRST TEST!", () => {
    render(<Home />); // ARRANGE

    const myElement = screen.getByText("main"); // ACT

    expect(myElement).toBeInTheDocument(); // ASSERT
  });
});

describe("Navbar Component  Test", () => {
  it("Text 'development' should be in the page", () => {
    render(<Nav className="" />); // ARRANGE

    const myElement = screen.getByText(/development/i);

    expect(myElement).toBeInTheDocument();
  });
});
