import { Columns, Heading, Rule, Text } from "@arc-ui/components";
import { FunctionComponent } from "react";
import { ColorTypes } from "../ColorText";
import StatusLabel from "../StatusLabel";
import "./dashboardCardRow.css";

export interface DataLabels {
  key: string;
  label: string;
  formatter: (value: string ) => string;
}
export interface DashboardCardRowProps {
  title: string;
  status: string;
  data: any;
  dataLabels: DataLabels[];
  statusColor: ColorTypes;
}

const DashboardCardRow: FunctionComponent<DashboardCardRowProps> = ({
  status,
  statusColor,
  title,
  data,
  dataLabels,
}) => {
  return (
    <div className="dashbaord__card__row__container">
      <div>
        <StatusLabel color={statusColor} text={status}></StatusLabel>
      </div>
      <div>
        <Heading size="s"># {title}</Heading>
      </div>
      <Rule />
      <Columns>
        {dataLabels.map((dataLabel) => (
          <Columns.Col
            span={6}
            key={`${dataLabel.key}-${dataLabels.indexOf(dataLabel)}`}
          >
            <Text size="s">
              {dataLabel.label} {dataLabel.formatter(data[dataLabel.key])}
            </Text>
          </Columns.Col>
        ))}
      </Columns>
    </div>
  );
};

export default DashboardCardRow;
