import React from "react";
import { render } from "@testing-library/react";
import { Input } from "./Input";

describe("Input", () => {
  test("renders the input component", () => {
    render(<Input name="email" />);
  });
});
