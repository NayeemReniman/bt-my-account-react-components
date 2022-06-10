import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Base } from "@arc-ui/components";
import { DashboardBanner } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Dashboard/DashboardBanner",
  component: DashboardBanner,
} as ComponentMeta<typeof DashboardBanner>;

export const Banner: ComponentStory<typeof DashboardBanner> = () => (
  <Base>
    <DashboardBanner
      body="This is some text"
      href="#"
      linktext="Clikc Here!"
      title="Hello Banners!"
    />
  </Base>
);
