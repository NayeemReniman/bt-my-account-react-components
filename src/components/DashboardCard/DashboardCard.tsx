import {
  Align,
  Button,
  Heading,
  Icon,
  VerticalSpace,
} from "@arc-ui/components";
import { FunctionComponent } from "react";
import DashboardPanel from "../DashboardPanel";
import "./dashboardCard.css";

export interface DashboardCardProps {
  headerText: string;
  icon: string;
  buttonText: string;
  buttonAction: () => void;
  children: React.ReactNode;
}

const DashboardCard: FunctionComponent<DashboardCardProps> = ({
  headerText,
  icon,
  buttonAction,
  buttonText,
  children,
}) => {
  return (
    <DashboardPanel
      header={
        <>
          <div className="dashbaord__card__header__text__container">
            <Heading size="m">{headerText}</Heading>
          </div>
          <div className="dashbaord__card__header__icon__container">
            <Align horizontal="right">
              <Icon icon={icon} size={32}></Icon>
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
