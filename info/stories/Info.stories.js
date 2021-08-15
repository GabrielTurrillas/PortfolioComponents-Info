import React from 'react';
import Info from '../Info';
import ClientSide from './ClientSide.svg'

export default {
  title: 'Screens/Info',
  component: Info,
};

const Template = (args) => <Info {...args} />;

export const Default = Template.bind({});
Default.args = {
  imgPath: ClientSide,
  alt: 'Client Side',
  title: 'Title',
  text: 'Quis Lorem sit culpa velit dolore commodo amet enim do laborum fugiat qui sunt aute. Duis dolore aute magna enim. Laboris velit ex anim dolore enim ea anim do aute non. Excepteur ea laborum ex amet amet cupidatat. Non laborum aliqua labore incididunt nostrud elit consequat. Sint id eiusmod magna'
};



