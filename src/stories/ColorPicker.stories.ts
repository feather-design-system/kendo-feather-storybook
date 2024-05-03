import { Meta, StoryObj } from "@storybook/vue3";
import { ColorPicker } from "@progress/kendo-vue-inputs";

const meta: Meta<typeof ColorPicker> = {
  title: "Feather K/Input/ColorPicker",
  component: ColorPicker,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          `<p>ColorPicker is a form component that allows users to select a color from a predefined palette.</p>` +
          `<h3>Links</h3>` +
          `<ul>
            <li><a href="https://www.telerik.com/kendo-vue-ui/components/inputs/api/ColorPickerProps/" target="_blank">ColorPicker API</a></li>
            <li><a href="https://www.telerik.com/kendo-vue-ui/components/inputs/colorpicker/" target="_blank">ColorPicker Documentation</a></li>
          </ul>
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {
    disabled: { control: "boolean" },
  },
  args: {
    disabled: false,
  },
  render: (args) => ({
    components: { ColorPicker },
    data() {
      return {
        value: "#FFA372",
      };
    },
    setup() {
      return { args };
    },
    template: `
      <ColorPicker
        v-model="value"
        :palette="args.palette"
        :tileSize="args.tileSize"
        :disabled="args.disabled"
      />
    `,
  }),
};