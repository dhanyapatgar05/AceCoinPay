import Payment from "./Payment";

export default {
  title: "Component/Payment",
  component: Payment,
};

const Template = (args) => <Payment {...args} />;

export const Default = Template.bind({});
Default.args = {};
