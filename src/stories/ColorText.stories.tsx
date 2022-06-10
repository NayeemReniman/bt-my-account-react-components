import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ColorText } from "../components";
import { Base } from "@arc-ui/components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "General/ColorText",
  component: ColorText,
} as ComponentMeta<typeof ColorText>;

export const Info: ComponentStory<typeof ColorText> = () => (
  <Base>
    <ColorText color="info">Hello world</ColorText>
  </Base>
);

export const Warn: ComponentStory<typeof ColorText> = () => (
  <Base>
    <ColorText color="warn">Hello world</ColorText>
  </Base>
);

export const Success: ComponentStory<typeof ColorText> = () => (
  <Base>
    <ColorText color="success">Hello world</ColorText>
  </Base>
);

export const Danger: ComponentStory<typeof ColorText> = () => (
  <Base>
    <ColorText color="danger">Hello world</ColorText>
  </Base>
);
