import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Base, Heading } from "@arc-ui/components";
import { DashboardPanel } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Dashboard/DashboardPanel",
  component: DashboardPanel,
} as ComponentMeta<typeof DashboardPanel>;

export const Pannel: ComponentStory<typeof DashboardPanel> = () => (
  <Base>
    <DashboardPanel
      header={
        <>
          <Heading>Iam Header!!</Heading>
        </>
      }
    >
      <Heading>Iam Body!!</Heading>
    </DashboardPanel>
  </Base>
);
