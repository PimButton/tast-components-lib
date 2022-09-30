import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Layout } from "./Layout";
import { Button } from "../Button/Button";
import { FormContextWrapper } from "../utils/formContext";
import { Input } from "../Input/Input";
import { useFormValues } from "../utils/useFormValues";

const Inputs = () => {
  const { formValues, handleChange, errors } = useFormValues({
    email: "",
    password: "",
  });

  return (
    <FormContextWrapper
      onChange={handleChange}
      errors={errors}
      formValues={formValues}
    >
      <Input name="email" label="E-mailadres" placeholder="E-mailadres" />{" "}
      <Input name="password" label="Wachtwoord" placeholder="Wachtwoord" />
    </FormContextWrapper>
  );
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Auth-Components/Layout",
  component: Layout,
} as ComponentMeta<typeof Layout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

const baseProps = {
  authVisual: (
    <div
      style={{
        background: "#1ea7fd",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <h2>Visual comes here</h2>
    </div>
  ),
  title: "Inloggen",
  inputs: <Inputs />,
  buttons: (
    <>
      <Button fullWidth>
        Inloggen bij <img src="/images/login/tast-cloud.svg" alt="tast-cloud" />
      </Button>
      <Button
        fullWidth
        variant="white"
        onClick={() => console.log("/activeren")}
      >
        Activatiecode
      </Button>
    </>
  ),
  handleSubmit: (e: any) => {
    e.preventDefault();
    console.log("submit");
  },
};

export const normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
normal.args = {
  ...baseProps,
};

export const withForgotPassword = Template.bind({});

withForgotPassword.args = {
  ...baseProps,
  forgotPasswordFunc: () => console.log("forgot password"),
};

export const withRegister = Template.bind({});
withRegister.args = {
  ...baseProps,
  MakeAccountFunc: () => console.log("register"),
  color: "#1ea7fd",
};
