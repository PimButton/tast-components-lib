import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "./Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Auth-Components/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
normal.args = {
  name: "name",
  label: "Naam",
  placeholder: "Barry B",
};

export const disabled = Template.bind({});

disabled.args = {
  name: "email",
  label: "Email",
  placeholder: "BarryB@mail.com",
  required: true,
  disabled: true,
};
