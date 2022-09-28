import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Auth-Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
normal.args = {
  children: "Click me!",
};

export const fullWidth = Template.bind({});
fullWidth.args = {
  children: "Wow I'm so wide",
  fullWidth: true,
};

export const inactive = Template.bind({});
inactive.args = {
  children: "I'm a shy button",
  inactive: true,
};
