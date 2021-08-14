import React from 'react';
import Info from './Info';

export default {
  title: 'Screens/Info',
  component: Info,
};

const Template = (args) => <Info {...args} />;

export const Default = Template.bind({});
Default.args = {};

