import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Base, Heading } from "@arc-ui/components";
import { Highlighter } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "General/Highlighter",
  component: Highlighter,
} as ComponentMeta<typeof Highlighter>;

export const basic: ComponentStory<typeof Highlighter> = () => (
  <Base>
    <Heading size="xl">
      You have <Highlighter>5</Highlighter> Notifications
    </Heading>
  </Base>
);
