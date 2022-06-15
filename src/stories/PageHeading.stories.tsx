import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Base } from "@arc-ui/components";
import { PageHeading } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Foundation/PageHeading",
  component: PageHeading,
} as ComponentMeta<typeof PageHeading>;

export const heading: ComponentStory<typeof PageHeading> = () => (
  <Base>
    <PageHeading
      description="Your latest bill for Home food cafe is now available."
      heading="Hi Rebecca, welcome back to BT Business"
    />
  </Base>
);
