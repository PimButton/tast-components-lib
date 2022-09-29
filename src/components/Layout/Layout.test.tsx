import React from "react";
import { render } from "@testing-library/react";
import { Layout } from "./Layout";

describe("Layout", () => {
  test("renders the layout component", () => {
    render(
      <Layout
        authVisual={<div>Visual</div>}
        buttons={<>Buttons</>}
        handleSubmit={() => console.log("submit")}
        inputs={<>Inputs</>}
        title="Title"
      />
    );
  });
});
