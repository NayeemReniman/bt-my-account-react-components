import {
  Align,
  Button,
  Heading,
  Icon,
  VerticalSpace,
} from "@arc-ui/components";
import { HeadingSize } from "@arc-ui/components/dist/types/components/Heading/Heading";
import { FunctionComponent } from "react";
import DashboardPanel from "../DashboardPanel";
import "./dashboardCard.css";

export interface DashboardCardProps {
  headerText: string;
  icon: string;
  buttonText: string;
  buttonAction: () => void;
  children: React.ReactNode;
  headingSize?: HeadingSize;
  iconSize?: number;
}

const DashboardCard: FunctionComponent<DashboardCardProps> = ({
  headerText,
  icon,
  buttonAction,
  buttonText,
  children,
  headingSize = "m",
  iconSize = 32,
}) => {
  return (
    <DashboardPanel
      header={
        <>
          <div className="dashbaord__card__header__text__container">
            <Heading size={headingSize}>{headerText}</Heading>
          </div>
          <div className="dashbaord__card__header__icon__container">
            <Align horizontal="right">
              <Icon icon={icon} size={iconSize}></Icon>
            </Align>
          </div>
        </>
      }
    >
      {children}
      <VerticalSpace size="48" />
      <Button label={buttonText} isFullWidth onClick={buttonAction}></Button>
    </DashboardPanel>
  );
};

export default DashboardCard;
