import Payment from "./Payment";

export default {
  title: "Component/Payment",
  component: PaymentLeft,
};

const Template = (args) => <PaymentLeft {...args} />;

export const Default = Template.bind({});
Default.args = {};
