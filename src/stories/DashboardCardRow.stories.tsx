import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Base } from "@arc-ui/components";
import { DashboardCardRow, DataLabels } from "../components";

const orderData: any = {
  "<OrderDate>k__BackingField": "2018-12-19T15:55:17Z",
  "<OrderIdentifier>k__BackingField": "BT5V952Q",
  "<Description>k__BackingField": "",
  "<OrderStatus>k__BackingField": false,
  "<LongDescription>k__BackingField": "Order for multiple BT Business products",
  "<PlacedOnDate>k__BackingField": "2018-12-19T15:55:17Z",
  "<CompletionDate>k__BackingField": "2019-01-15T23:59:59Z",
  "<CompleteOrderStatus>k__BackingField": "Completed",
  "<Type>k__BackingField": 0,
  "<Postcode>k__BackingField": "S1 3PL",
  "<ProductOrderItems>k__BackingField": [
    "Business BroadBand Access",
    "BT Business Apps",
    "Business PSTN Service Value",
  ],
};

const orderDataLabels: DataLabels[] = [
  {
    key: "<PlacedOnDate>k__BackingField",
    label: "Orderd on",
    formatter: (value: string) => new Date(value).toLocaleDateString("en-GB"),
  },
  {
    key: "<CompletionDate>k__BackingField",
    label: "Expected delivery on",
    formatter: (value: string) => new Date(value).toLocaleDateString("en-GB"),
  },
  {
    key: "<Postcode>k__BackingField",
    label: "Delivery location",
    formatter: (value: string) => value,
  },
  {
    key: "<Type>k__BackingField",
    label: "Cost £",
    formatter: (value: string) => value,
  },
];
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Dashboard/DashboardCardRow",
  component: DashboardCardRow,
} as ComponentMeta<typeof DashboardCardRow>;

export const CardRow: ComponentStory<typeof DashboardCardRow> = () => (
  <Base>
    <DashboardCardRow
      status="Open"
      statusColor="warn"
      title="234567 Super fast broadband"
      data={orderData}
      dataLabels={orderDataLabels}
    />
  </Base>
);
