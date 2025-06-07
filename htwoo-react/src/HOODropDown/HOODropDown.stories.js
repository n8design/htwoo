import { symset } from "../SymbolSet";
import HOODropDown, {
  IHOODropDownGroup,
  IHOODropDownItem,
} from "./HOODropDown";

const Template = (args) => <HOODropDown {...args} />;

export default {
  title: "Components/Inputs/HOODropDown",
  component: HOODropDown,
};

export const Standard = {
  render: Template.bind({}),
  name: "Standard",

  args: (function () {
    symset.initSymbols();

    const dropdownItems = [
      {
        key: 1,
        text: "Apple",
        disabled: false,
      },
      {
        key: 2,
        text: "Banana",
        disabled: false,
      },
      {
        key: 3,
        text: "Cherry",
        disabled: false,
      },
      {
        key: 4,
        text: "Date",
        disabled: false,
      },
      {
        key: 5,
        text: "Elderberry",
        disabled: false,
      },
      {
        key: 6,
        text: "Fig",
        disabled: false,
      },
      {
        key: 7,
        text: "Grape",
        disabled: false,
      },
      {
        key: 8,
        text: "Honeydew",
        disabled: false,
      },
      {
        key: 9,
        text: "Ice Cream Bean",
        disabled: false,
      },
      {
        key: 10,
        text: "Jackfruit",
        disabled: false,
      },
      {
        key: 11,
        text: "Kiwi",
        disabled: false,
      },
      {
        key: 12,
        text: "Lemon",
        disabled: false,
      },
      {
        key: 13,
        text: "Mango",
        disabled: false,
      },
      {
        key: 14,
        text: "Nectarine",
        disabled: false,
      },
      {
        key: 15,
        text: "Orange",
        disabled: false,
      },
      {
        key: 16,
        text: "Papaya",
        disabled: false,
      },
      {
        key: 17,
        text: "Quince",
        disabled: false,
      },
      {
        key: 18,
        text: "Raspberry",
        disabled: false,
      },
      {
        key: 19,
        text: "Strawberry",
        disabled: false,
      },
      {
        key: 20,
        text: "Tangerine",
        disabled: false,
      },
      {
        key: 21,
        text: "Ugli Fruit",
        disabled: false,
      },
      {
        key: 22,
        text: "Vanilla Bean",
        disabled: false,
      },
      {
        key: 23,
        text: "Watermelon",
        disabled: false,
      },
      {
        key: 24,
        text: "Xigua",
        disabled: false,
      },
      {
        key: 25,
        text: "Yellow Passionfruit",
        disabled: false,
      },
      {
        key: 26,
        text: "Zucchini",
        disabled: false,
      },
      {
        key: 27,
        text: "Peach",
        disabled: false,
      },
      {
        key: 28,
        text: "Lychee",
        disabled: false,
      },
      {
        key: 29,
        text: "Blueberry",
        disabled: false,
      },
      {
        key: 30,
        text: "Blackberry",
        disabled: false,
      },
    ];

    const options = dropdownItems;

    return {
      value: 1,
      options: options,

      onChange: (fieldValue) => {
        console.log(`Dropdown value: ${fieldValue}`);
      },
    };
  })(),
};

export const Grouped = {
  render: Template.bind({}),
  name: "Grouped",

  args: (function () {
    symset.initSymbols();

    const groupItems1 = [
      {
        key: 1,
        text: "Apple",
        disabled: false,
      },
      {
        key: 2,
        text: "Banana",
        disabled: false,
      },
      {
        key: 3,
        text: "Cherry",
        disabled: false,
      },
      {
        key: 7,
        text: "Grape",
        disabled: false,
      },
      {
        key: 8,
        text: "Honeydew",
        disabled: false,
      },
      {
        key: 12,
        text: "Lemon",
        disabled: false,
      },
      {
        key: 14,
        text: "Nectarine",
        disabled: false,
      },
      {
        key: 15,
        text: "Orange",
        disabled: false,
      },
      {
        key: 18,
        text: "Raspberry",
        disabled: false,
      },
      {
        key: 19,
        text: "Strawberry",
        disabled: false,
      },
      {
        key: 20,
        text: "Tangerine",
        disabled: false,
      },
      {
        key: 23,
        text: "Watermelon",
        disabled: false,
      },
      {
        key: 26,
        text: "Zucchini",
        disabled: false,
      },
      {
        key: 27,
        text: "Peach",
        disabled: false,
      },
      {
        key: 29,
        text: "Blueberry",
        disabled: false,
      },
      {
        key: 30,
        text: "Blackberry",
        disabled: false,
      },
    ];

    const groupItems2 = [
      {
        key: 4,
        text: "Date",
        disabled: false,
      },
      {
        key: 5,
        text: "Elderberry",
        disabled: false,
      },
      {
        key: 6,
        text: "Fig",
        disabled: false,
      },
      {
        key: 9,
        text: "Ice Cream Bean",
        disabled: false,
      },
      {
        key: 10,
        text: "Jackfruit",
        disabled: false,
      },
      {
        key: 11,
        text: "Kiwi",
        disabled: false,
      },
      {
        key: 13,
        text: "Mango",
        disabled: false,
      },
      {
        key: 16,
        text: "Papaya",
        disabled: false,
      },
      {
        key: 17,
        text: "Quince",
        disabled: false,
      },
      {
        key: 21,
        text: "Ugli Fruit",
        disabled: false,
      },
      {
        key: 22,
        text: "Vanilla Bean",
        disabled: false,
      },
      {
        key: 24,
        text: "Xigua",
        disabled: false,
      },
      {
        key: 25,
        text: "Yellow Passionfruit",
        disabled: false,
      },
      {
        key: 28,
        text: "Lychee",
        disabled: false,
      },
    ];

    const options = [
      {
        groupName: "Standard Fruit",
        groupItems: groupItems1,
      },
      {
        groupName: "Exotic Fruit",
        groupItems: groupItems2,
      },
    ];

    return {
      value: 1,
      options: options,

      onChange: (fieldValue) => {
        console.log(`Dropdown value: ${fieldValue}`);
      },
    };
  })(),
};

export const TypeAheadFeature = {
  render: Template.bind({}),
  name: "TypeAhead Feature",

  args: (function () {
    symset.initSymbols();

    const dropdownItems = [
      {
        key: 1,
        text: "Apple",
        disabled: false,
      },
      {
        key: 2,
        text: "Banana",
        disabled: false,
      },
      {
        key: 3,
        text: "Cherry",
        disabled: false,
      },
      {
        key: 4,
        text: "Date",
        disabled: false,
      },
      {
        key: 5,
        text: "Elderberry",
        disabled: false,
      },
      {
        key: 6,
        text: "Fig",
        disabled: false,
      },
      {
        key: 7,
        text: "Grape",
        disabled: false,
      },
      {
        key: 8,
        text: "Honeydew",
        disabled: false,
      },
      {
        key: 9,
        text: "Ice Cream Bean",
        disabled: false,
      },
      {
        key: 10,
        text: "Jackfruit",
        disabled: false,
      },
      {
        key: 11,
        text: "Kiwi",
        disabled: false,
      },
      {
        key: 12,
        text: "Lemon",
        disabled: false,
      },
      {
        key: 13,
        text: "Mango",
        disabled: false,
      },
      {
        key: 14,
        text: "Nectarine",
        disabled: false,
      },
      {
        key: 15,
        text: "Orange",
        disabled: false,
      },
      {
        key: 16,
        text: "Papaya",
        disabled: false,
      },
      {
        key: 17,
        text: "Quince",
        disabled: false,
      },
      {
        key: 18,
        text: "Raspberry",
        disabled: false,
      },
      {
        key: 19,
        text: "Strawberry",
        disabled: false,
      },
      {
        key: 20,
        text: "Tangerine",
        disabled: false,
      },
      {
        key: 21,
        text: "Ugli Fruit",
        disabled: false,
      },
      {
        key: 22,
        text: "Vanilla Bean",
        disabled: false,
      },
      {
        key: 23,
        text: "Watermelon",
        disabled: false,
      },
      {
        key: 24,
        text: "Xigua",
        disabled: false,
      },
      {
        key: 25,
        text: "Yellow Passionfruit",
        disabled: false,
      },
      {
        key: 26,
        text: "Zucchini",
        disabled: false,
      },
      {
        key: 27,
        text: "Peach",
        disabled: false,
      },
      {
        key: 28,
        text: "Lychee",
        disabled: false,
      },
      {
        key: 29,
        text: "Blueberry",
        disabled: false,
      },
      {
        key: 30,
        text: "Blackberry",
        disabled: false,
      },
    ];

    const options = dropdownItems;

    return {
      value: 1,
      options: options,
      containsTypeAhead: false,

      onChange: (fieldValue) => {
        console.log(`Dropdown value: ${fieldValue}`);
      },
    };
  })(),
};
