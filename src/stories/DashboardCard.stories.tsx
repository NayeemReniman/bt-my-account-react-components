import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Base, Text } from "@arc-ui/components";
import { DashboardCard } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Dashboard/DashboardCard",
  component: DashboardCard,
} as ComponentMeta<typeof DashboardCard>;

export const defaultCard: ComponentStory<typeof DashboardCard> = () => (
  <Base>
    <DashboardCard
      buttonAction={() => console.log("Iam cliked from Dashboard Card!!")}
      buttonText="Click Me"
      headerText="2 Faults"
      icon="btSpanner"
    >
      <Text size="m">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis
        tincidunt tortor, ac vestibulum elit mollis vel. Aliquam at massa nisi.
        Maecenas accumsan molestie nisl non dignissim. Suspendisse eros urna,
        aliquet a lacinia et, auctor sit amet ex. Integer ac augue ac nulla
        ultricies commodo.
      </Text>
    </DashboardCard>
  </Base>
);

export const CustomSizeCard: ComponentStory<typeof DashboardCard> = () => (
  <Base>
    <DashboardCard
      buttonAction={() => console.log("Iam cliked from Dashboard Card!!")}
      buttonText="Click Me"
      headerText="2 Faults"
      icon=""
      headingSize="s"
      iconSize={0}
    >
      <Text size="s">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis
        tincidunt tortor, ac vestibulum elit mollis vel. Aliquam at massa nisi.
        Maecenas accumsan molestie nisl non dignissim. Suspendisse eros urna,
        aliquet a lacinia et, auctor sit amet ex. Integer ac augue ac nulla
        ultricies commodo.
      </Text>
    </DashboardCard>
  </Base>
);
