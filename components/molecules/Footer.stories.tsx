import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Footer } from './Footer';

export default {
  title: 'Example/Footer',
  component: Footer,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Mimo',
    image: 'https://static.nittai-one.com/uploads/user/avatar/2/CE1865EF-A2B8-4E83-9701-08EBF1E5E68C.jpeg',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
