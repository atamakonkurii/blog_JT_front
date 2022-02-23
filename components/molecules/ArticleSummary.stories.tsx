import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ArticleSummary } from "./ArticleSummary";

export default {
  title: "Example/ArticleSummary",
  component: ArticleSummary,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ArticleSummary>;

const Template: ComponentStory<typeof ArticleSummary> = (args) => (
  <ArticleSummary {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  article: {
    title: 'タイトル',
    content: 'コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ',
    created_at: '100月100日'
  },
  user: {
    name: "Mimo",
    image:
      "https://static.nittai-one.com/uploads/user/avatar/2/CE1865EF-A2B8-4E83-9701-08EBF1E5E68C.jpeg",
  },
};
