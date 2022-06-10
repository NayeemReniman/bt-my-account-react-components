import { Heading, Icon, Text } from "@arc-ui/components";
import { FunctionComponent } from "react";
import "./dashboardBanner.css";

export interface DashboardBannerProps {
  title: string;
  body: string;
  linktext: string;
  href: string;
}

const DashboardBanner: FunctionComponent<DashboardBannerProps> = ({
  title,
  body,
  linktext,
  href,
}) => {
  return (
    <div className="dashbaord__banners__container">
      <div className="dashbaord__banners__body__container">
        <div>
          <Heading size="s">{title}</Heading>
        </div>
        <div>
          <Text size="xs">{body}</Text>
        </div>
        <div>
          <a href={href}>{linktext}</a>
        </div>
      </div>
      <div className="dashbaord__banners__control__container">
        <Icon color="brand" icon="btCross" size={22} />
      </div>
    </div>
  );
};

export default DashboardBanner;
