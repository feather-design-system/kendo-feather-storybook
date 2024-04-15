import { Meta, StoryObj } from "@storybook/vue3";
import { MultiSelect } from "@progress/kendo-vue-dropdowns";
import { Label, Hint } from "@progress/kendo-vue-labels";

const items = [
  {
    text: "Basketball",
    value: "basketball",
  },
  {
    text: "Football",
    value: "football",
  },
  {
    text: "Golf",
    value: "golf",
  },
  {
    text: "Tennis",
    value: "tennis",
  },
  {
    text: "Volleyball",
    value: "volleyball",
  },
];

const meta: Meta<typeof MultiSelect> = {
  title: "Feather K/DropDowns/MultiSelect",
  component: MultiSelect,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {
    // label: { control: 'text' },
    dataItems: { control: "object" },
    valueField: { control: "value" },
    textField: { control: "text" },
    disabled: { control: "boolean" },
    filterable: { control: "boolean" },
    placeholder: { control: "text" },
    fillMode: { control: "select", options: ["solid", "outline"] },
    rounded: {
      control: "select",
      options: ["full", "small", "medium", "large"],
    },
  },
  args: {
    // label: 'Favorite Sports',
    dataItems: items,
    valueField: "value",
    textField: "text",
    disabled: false,
    filterable: true,
    placeholder: "",
    fillMode: "outline",
    rounded: "medium",
  },
  parameters: {
    style: {
      width: "40em",
    },
    hint: {
      content: "Choose your favorite sports",
      default: true,
    }
  },
  render: (args) => ({
    components: { MultiSelect, Label, Hint },
    setup() {
      return { args };
    },
    template: `
    <Label> Favorite Sports </Label>
    <MultiSelect v-bind="args" :style="args.style"/>
    <Hint>Choose your favorite sports</Hint>
    `,
  }),
};
