import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {
  Columns,
  Heading,
  Text,
  Base,
  VerticalSpace,
} from "@arc-ui/components";
import { RecommendationsCard } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Dashboard/RecommendationsCard",
  component: RecommendationsCard,
} as ComponentMeta<typeof RecommendationsCard>;

export const Primary: ComponentStory<typeof RecommendationsCard> = () => (
  <Base>
    <RecommendationsCard
      bannerBody="You no longer need that landline. Cloud Voice brings your voice, video, meeting and messaging tools together under a single, intuitive and flexible online portal."
      bannerLinktext="Find out more about Cloud Voice Express>"
      bannerTitle="Decrease your phone costs "
      bannerhref="#"
      cardTitle=""
      contentSize="100%"
    >
      <>
        <Heading size="m">Yearly spend</Heading>
        <VerticalSpace size="24" />
        <Columns>
          <Columns.Col span={6}>
            <Text size="s">Broadband</Text>
            <Heading size="l">£1344.00</Heading>
            <Text size="xs">0%</Text>
          </Columns.Col>
          <Columns.Col span={6}>
            <Text size="s">Phone line</Text>
            <Heading size="l">£420.99</Heading>
            <Text size="xs">+12%</Text>
          </Columns.Col>
        </Columns>
      </>
    </RecommendationsCard>
  </Base>
);
