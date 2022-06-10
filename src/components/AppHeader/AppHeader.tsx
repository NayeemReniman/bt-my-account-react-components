import { Icon, SiteHeader } from "@arc-ui/components";
import { FunctionComponent } from "react";
import "./appHeader.css";

export interface AppHeaderProps {
  isLoggedIn: boolean;
}

const AppHeader: FunctionComponent<AppHeaderProps> = ({ isLoggedIn }) => {
  return (
    <SiteHeader
      loginHref={isLoggedIn ? "/logout" : "/login"}
      loginTitle={isLoggedIn ? "Logout" : "Login / Register"}
      search={<Icon icon="btSearch" size={40} />}
    ></SiteHeader>
  );
};

export default AppHeader;
