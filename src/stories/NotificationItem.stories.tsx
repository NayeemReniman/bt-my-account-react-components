import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Base } from "@arc-ui/components";
import { NotificationItem } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Notifications/NotificationItem",
  component: NotificationItem,
} as ComponentMeta<typeof NotificationItem>;

export const BasicNotfication: ComponentStory<typeof NotificationItem> = () => (
  <Base>
    <NotificationItem
      shortDescription="Partial payment"
      title="£1886.00"
      body="Payment for your GP09911122 account is due. You have a
                      direct debit set up and this will be processed as normal."
      manageNotificationLinkAction={() =>
        console.log("Iam clicked notfication Action")
      }
      manageNotificationIcon="btPdf"
      manageNotificationLinkText="Manage bill >"
      readAction={() => console.log("Iam clicked notfication Action")}
      snoozeAction={() => console.log("Iam clicked notfication Action")}
      statusLabel={{ color: "warn", text: "DUE: 1/10/2021" }}
    />
  </Base>
);
