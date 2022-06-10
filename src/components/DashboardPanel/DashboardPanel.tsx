import { Rule, VerticalSpace } from "@arc-ui/components";
import { FunctionComponent } from "react";
import "./dashboardPanel.css";

export interface DashbaordPanelProps {
  header: React.ReactNode;
  children: React.ReactNode;
}

const DashbaordPanel: FunctionComponent<DashbaordPanelProps> = ({
  header,
  children,
}) => {
  return (
    <div className="dashboard__Panel__container">
      <div className="dashboard__Panel__header">{header}</div>
      <Rule />
      <VerticalSpace size="8" />
      {children}
    </div>
  );
};

export default DashbaordPanel;
