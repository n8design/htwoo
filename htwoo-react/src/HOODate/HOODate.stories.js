import HOODate from "./HOODate";

const Template = (args) => <HOODate {...args} />;

export default {
  title: "Components/Inputs/HOODate",
  component: HOODate,
};

export const Standard = {
  render: Template.bind({}),
  name: "Standard",

  args: {
    value: new Date().toISOString().split("T")[0],
  },
};

export const MinMaxValues = {
  render: Template.bind({}),
  name: "Min/Max Values",

  args: (function () {
    const _minValue = new Date();
    const _maxValue = new Date();
    _maxValue.setFullYear(_maxValue.getFullYear() + 1);
    _minValue.setFullYear(_minValue.getFullYear() - 1);

    return {
      value: new Date().toISOString().split("T")[0],
      minValue: _minValue.toISOString().split("T")[0],
      maxValue: _maxValue.toISOString().split("T")[0],
    };
  })(),
};

export const Disabled = {
  render: Template.bind({}),
  name: "Disabled",

  args: {
    value: new Date().toISOString().split("T")[0],
    disabled: true,
  },
};

export const Extending = {
  render: Template.bind({}),
  name: "Extending",

  args: {
    value: new Date().toISOString().split("T")[0],

    rootElementAttributes: {
      style: {
        backgroundColor: "pink",
      },
    },
  },
};
