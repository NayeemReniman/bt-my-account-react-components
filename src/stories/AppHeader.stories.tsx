import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Base } from "@arc-ui/components";
import { AppHeader } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Foundation/AppHeader",
  component: AppHeader,
} as ComponentMeta<typeof AppHeader>;

export const LoggedIn: ComponentStory<typeof AppHeader> = () => (
  <Base>
    <AppHeader isLoggedIn={true} />
  </Base>
);

export const LoggedOut: ComponentStory<typeof AppHeader> = () => (
  <Base>
    <AppHeader isLoggedIn={false} />
  </Base>
);
