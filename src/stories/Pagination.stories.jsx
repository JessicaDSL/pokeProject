import React from 'react'

import Pagination from '../components/Pagination'

export default {
  title: "Components/Pagination",
  component: Pagination
}

const component = (args) => <Pagination {...args} />;

export const Default = component.bind({});

Default.args = {
  handleChange: console.log
}