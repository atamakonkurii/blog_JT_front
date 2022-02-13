import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UserImage } from './UserImage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/UserImage',
  component: UserImage,
} as ComponentMeta<typeof UserImage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UserImage> = (args) => <UserImage {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};