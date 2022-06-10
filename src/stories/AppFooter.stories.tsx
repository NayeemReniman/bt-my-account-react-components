import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Base } from "@arc-ui/components";
import { AppFooter } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Foundation/AppFooter",
  component: AppFooter,
} as ComponentMeta<typeof AppFooter>;

export const Footer: ComponentStory<typeof AppFooter> = () => (
  <Base>
    <AppFooter />
  </Base>
);
