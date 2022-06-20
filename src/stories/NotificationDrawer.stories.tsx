import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Base } from "@arc-ui/components";
import {
  DashboardBannerProps,
  NotificationDrawer,
  NotificationItemProps,
} from "../components";

const dummyNotifications: NotificationItemProps[] = [
  {
    notificationType: "todo",
    shortDescription: "Partial payment",
    title: "£1886.00",
    body: "Payment for your GP09911122 account is due.  You have a direct debit set up and this will be processed as normal.",
    manageNotificationIcon: "btDocument",
    manageNotificationLinkAction: () => {},
    manageNotificationLinkText: "Manage bill >",
    readAction: () => {},
    snoozeAction: () => {},
    statusLabel: { color: "warn", text: "DUE: 1/10/2021" },
  },
  {
    notificationType: "todo",
    shortDescription: "Partial payment 2",
    title: "£1887.00",
    body: "Payment for your GP09911122 account is due.  You have a direct debit set up and this will be processed as normal.",
    manageNotificationIcon: "btDocument",
    manageNotificationLinkAction: () => {},
    manageNotificationLinkText: "Manage bill >",
    readAction: () => {},
    snoozeAction: () => {},
    statusLabel: { color: "warn", text: "DUE: 1/10/2021" },
  },

  {
    notificationType: "complete",
    shortDescription: "",
    title: "",
    body: "You have invoices awaiting approval",
    manageNotificationIcon: "btDocument",
    manageNotificationLinkAction: () => {},
    manageNotificationLinkText: "Launch app >",
    readAction: () => {},
    snoozeAction: () => {},
    statusLabel: { color: "success", text: "DUE: 1/10/2021" },
  },
];
const dummayInsignts: DashboardBannerProps[] = [
  {
    body: "",
    href: "#",
    linktext: "Manage subscriptions",
    title:
      "You’re only using 5% of your Acronis Business Backup – change plan to save up to £15.",
  },
  {
    body: "",
    href: "#",
    linktext: "Manage subscriptions",
    title:
      "You’re only using 5% of your Acronis Business Backup – change plan to save up to £15.",
  },
  {
    body: "",
    href: "#",
    linktext: "Manage subscriptions",
    title:
      "You’re only using 5% of your Acronis Business Backup – change plan to save up to £15.",
  },
  {
    body: "",
    href: "#",
    linktext: "Manage subscriptions",
    title:
      "You’re only using 5% of your Acronis Business Backup – change plan to save up to £15.",
  },
];
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Notifications/NotificationDrawer",
  component: NotificationDrawer,
} as ComponentMeta<typeof NotificationDrawer>;

export const dashboardNotfications: ComponentStory<typeof NotificationDrawer> =
  () => (
    <Base>
      <NotificationDrawer
        insights={dummayInsignts}
        notifications={dummyNotifications}
      />
    </Base>
  );
