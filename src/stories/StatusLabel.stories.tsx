import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Base } from "@arc-ui/components";
import { StatusLabel } from "../components";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "General/StatusLabel",
  component: StatusLabel,
} as ComponentMeta<typeof StatusLabel>;

export const Info: ComponentStory<typeof StatusLabel> = () => (
  <Base>
    <StatusLabel text="Hello World!" color="info" />
  </Base>
);

export const Warn: ComponentStory<typeof StatusLabel> = () => (
  <Base>
    <StatusLabel text="Hello World!" color="warn" />
  </Base>
);

export const Success: ComponentStory<typeof StatusLabel> = () => (
  <Base>
    <StatusLabel text="Hello World!" color="success" />
  </Base>
);

export const Danger: ComponentStory<typeof StatusLabel> = () => (
  <Base>
    <StatusLabel text="Hello World!" color="danger" />
  </Base>
);
