import { Heading, VerticalSpace, Text } from "@arc-ui/components";
import { FunctionComponent } from "react";

export interface PageHeadingProps {
  heading: string;
  description: string;
}

const PageHeading: FunctionComponent<PageHeadingProps> = ({
  heading,
  description,
}) => {
  return (
    <>
      <Heading size="m">{heading}</Heading>
      <VerticalSpace size="12" />
      <Text size="m">{description}</Text>
    </>
  );
};

export default PageHeading;
