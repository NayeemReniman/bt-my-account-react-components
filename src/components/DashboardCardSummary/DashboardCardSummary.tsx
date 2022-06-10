import { FunctionComponent } from "react";

import "./dashboardCardSummary.css";

import ColorText, { ColorTypes } from "../ColorText";
import { Heading, Text } from "@arc-ui/components";

export interface SummaryLabels {
  mainText: string;
  textColor: ColorTypes;
  helperText: string;
}
export interface DashboardCardSummaryProps {
  summaries: SummaryLabels[];
  data: any[];
  labelKey: string;
}

const DashboardCardSummary: FunctionComponent<DashboardCardSummaryProps> = ({
  summaries,
  labelKey,
  data,
}) => {
  return (
    <div className="dashboard__card__summaries__container">
      {summaries.map((summary) => (
        <div
          className="dashboard__card__summary__container"
          key={summary.mainText}
        >
          <div className="dashboard__card__summary__color_container">
            <ColorText color={summary.textColor} size="l">
              {
                data.filter(
                  (item) =>
                    item[labelKey].toLowerCase() ===
                    summary.mainText.toLowerCase()
                ).length
              }
            </ColorText>
          </div>
          <div className="dashboard__card__summary__text__container">
            <Heading size="xs">
              {summary.mainText}{" "}
              <Text size="xs" isInline>
                - {summary.helperText}
              </Text>
            </Heading>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCardSummary;
