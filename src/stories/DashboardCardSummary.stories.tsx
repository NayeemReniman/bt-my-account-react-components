import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Base } from "@arc-ui/components";
import { DashboardCardSummary, SummaryLabels } from "../components";

const faultLabels: SummaryLabels[] = [
  {
    mainText: "Repair reported",
    textColor: "warn",
    helperText: "We are assessing the repair required",
  },
  {
    mainText: "Repair in progress",
    textColor: "info",
    helperText: "We are working on these now!",
  },
  {
    mainText: "Fault resolved",
    textColor: "success",
    helperText: "In the last 24 hours",
  },
];

const faults: any[] = [
  {
    Status: "Fault resolved",
  },
  {
    Status: "Fault resolved",
  },
  {
    Status: "Fault resolved",
  },
  {
    Status: "Fault resolved",
  },
  {
    Status: "Fault resolved",
  },
];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Dashboard/DashboardCardSummary",
  component: DashboardCardSummary,
} as ComponentMeta<typeof DashboardCardSummary>;

export const CardSummary: ComponentStory<typeof DashboardCardSummary> = () => (
  <Base>
    <DashboardCardSummary
      summaries={faultLabels}
      data={faults}
      labelKey="Status"
    />
  </Base>
);
