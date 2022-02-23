import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { Articles } from "./Articles";

export default {
  title: "Example/Articles",
  component: Articles,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Articles>;

const Template: ComponentStory<typeof Articles> = (args) => (
  <Articles {...args} />
);

export const LoggedOut = Template.bind({});

export const LoggedIn = Template.bind({});

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
LoggedIn.args = {
  articles:{
    attributes: {
      title_ja: 'string',
      content_ja: 'ing',
      title_image: { url: 'string' },
      created_at: 'ing',
    },
  },
  loginUser: {
    name: "Kazu",
    image:
      "https://static.nittai-one.com/uploads/user/avatar/2/CE1865EF-A2B8-4E83-9701-08EBF1E5E68C.jpeg",
  },
};
