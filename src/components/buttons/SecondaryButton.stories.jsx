import React from "react";
import SecondaryButton from "./SecondaryButton";

export default {
  title: "Components/SecondaryButton",
  component: SecondaryButton,
};

const Template = (args) => <SecondaryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Secondary Button",
};
