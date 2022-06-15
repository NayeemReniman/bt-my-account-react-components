import { Heading, VerticalSpace, Text } from "@arc-ui/components";
import { FunctionComponent } from "react";
import AppFooter from "../AppFooter";
import AppHeader from "../AppHeader";
import SideNavbar from "../SideNavbar";

import "./appTemplate.css";

export interface AppTemplateProps {
  children: React.ReactNode;
  sideNonNavContainer: React.ReactNode;
  isLoggedIn: boolean;
}

const AppTemplate: FunctionComponent<AppTemplateProps> = ({
  children,
  sideNonNavContainer,
  isLoggedIn,
}) => {
  const sideMenuItems = [
    {
      title: "Dashboard",
      icon: "btDashboard",
      href: "#",
      subMenu: [],
    },
    {
      title: "Billing",
      icon: "btDocumentBills",
      href: "#",
      subMenu: [
        { title: "Statements", icon: "", href: "#" },
        { title: "Previous bills", icon: "", href: "#" },
        { title: "Payments", icon: "", href: "#" },
        { title: "Account reporting", icon: "", href: "#" },
        { title: "Subscriptions", icon: "", href: "#" },
        { title: "Account set up", icon: "", href: "#" },
      ],
    },
    {
      title: "Apps & services",
      icon: "btLayoutGridLarge",
      href: "#",
      subMenu: [],
    },
    {
      title: "Orders",
      icon: "btVan",
      href: "#",
      subMenu: [],
    },
    {
      title: "Faults",
      icon: "btSpanner",
      href: "#",
      subMenu: [],
    },
  ];
  return (
    <>
      <AppHeader isLoggedIn={isLoggedIn} />
      <div className="app__template__container">
        <div key="sideNav" className="app__template__side__nav__container">
          <SideNavbar menuItems={sideMenuItems}>
            {sideNonNavContainer}
          </SideNavbar>
        </div>
        <div key="mainContent" className="app__template__main__container">
          {children}
        </div>
      </div>
      <VerticalSpace />
      <AppFooter />
    </>
  );
};

export default AppTemplate;
