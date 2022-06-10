import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Base } from "@arc-ui/components";
import { SideNavbar } from "../components";
import { MenuItems } from "../components/SideNavbar";
const sideMenuItems: MenuItems[] = [
  {
    title: "Dashbaord",
    icon: "btDashboard",
    href: "",
    subMenu: [],
  },
  {
    title: "Billing",
    icon: "btDocumentBills",
    href: "",
    subMenu: [
      { title: "Statements", icon: "", href: "" },
      { title: "Previous bills", icon: "", href: "" },
      { title: "Payments", icon: "", href: "" },
      { title: "Account reporting", icon: "", href: "" },
      { title: "Subscriptions", icon: "", href: "" },
      { title: "Account set up", icon: "", href: "" },
    ],
  },
  {
    title: "Apps & services",
    icon: "btLayoutGridLarge",
    href: "",
    subMenu: [],
  },
  {
    title: "Orders",
    icon: "btVan",
    href: "",
    subMenu: [],
  },
  {
    title: "Faults",
    icon: "btSpanner",
    href: "",
    subMenu: [],
  },
];
// More on default export: https://storybook.js.org/docs/react/writing-stories/introductiondefault-export
export default {
  title: "Foundation/SideNavbar",
  component: SideNavbar,
} as ComponentMeta<typeof SideNavbar>;

export const TwoLevelSideNav: ComponentStory<typeof SideNavbar> = () => (
  <Base>
    <SideNavbar menuItems={sideMenuItems}><></></SideNavbar>
  </Base>
);
