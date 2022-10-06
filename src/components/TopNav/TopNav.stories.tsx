import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TopNav } from "./TopNav";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Auth-Components/TopNav",
  component: TopNav,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof TopNav>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TopNav> = (args) => <TopNav {...args} />;

export const normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
normal.args = {
  handleLogout: () => console.log("logout"),
  handleProfileClick: () => console.log("profile"),
  image:
    "https://pbs.twimg.com/profile_images/378800000024114360/51a0f68b6ceb2396602dad852ebc691c_400x400.jpeg",
  setHamburgerNavOpen: () => console.log("hamburger"),
  userInfo: (
    <>
      <p style={{ fontWeight: 600, fontFamily: "sans-serif", fontSize: 14 }}>
        Michael Nicht
      </p>
      <p style={{ fontFamily: "sans-serif", fontSize: 12 }}>Klootviool</p>
    </>
  ),
};
