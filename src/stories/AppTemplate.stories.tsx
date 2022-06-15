import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Base } from "@arc-ui/components";
import { AppTemplate, PageHeading } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Foundation/AppTemplate",
  component: AppTemplate,
} as ComponentMeta<typeof AppTemplate>;

export const DashbaordTemplate: ComponentStory<typeof AppTemplate> = () => (
  <Base>
    <AppTemplate isLoggedIn={true} sideNonNavContainer={<></>}>
      <PageHeading
        description="Your latest bill for Home food cafe is now available."
        heading="Hi Rebecca, welcome back to BT Business"
      />
    </AppTemplate>
  </Base>
);
