import { Meta, StoryObj } from "@storybook/vue3";
import { RangeSlider, SliderLabel } from "@progress/kendo-vue-inputs";

import "./slider.css";

const meta: Meta<typeof RangeSlider> = {
  title: "Feather K/RangeSlider",
  // title: "Feather K/Input/RangeSlider",
  component: RangeSlider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `<h5>RangeSlider is a component that allows the user to select a numeric value from a predefined range.</h5>` +
        `<h3>Links</h3>` +
        `<ul>
          <li><a href="https://www.telerik.com/kendo-vue-ui/components/inputs/api/RangeSliderProps/" target="_blank">RangeSlider API</a></li>
          <li><a href="https://www.telerik.com/kendo-vue-ui/components/inputs/rangeslider/" target="_blank">RangeSlider Documentation</a></li>
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
    vertical: { control: "boolean" },
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    defaultValue: { control: "object" },
  },
  args: {
    vertical: false,
    min: 0,
    max: 100,
    step: 1,
    defaultValue: { start: 25, end: 80 },
  },
  render: (args) => ({
    components: { RangeSlider, SliderLabel },
    computed: {
      sliderValue() {
        return this.value;
      },
    },
    data() {
      return {};
    },
    setup() {
      return { args };
    },
    template: `
    <div class="my-slider-container">
      <div>
        <RangeSlider
          :vertical="args.vertical"
          :min="args.min"
          :max="args.max"
          :step="args.step"
          :defaultValue="args.defaultValue"
          :digits="args.digits"
          v-model="args.value"
        >
          <SliderLabel slot="label" :position="0">0</SliderLabel>
          <SliderLabel slot="label" :position="25">25</SliderLabel>
          <SliderLabel slot="label" :position="50">50</SliderLabel>
          <SliderLabel slot="label" :position="75">75</SliderLabel>
          <SliderLabel slot="label" :position="100">100</SliderLabel>
        </RangeSlider>
        </div>
        <div>
          <NumericTextBox :label="'Start'" :value="Number.parseInt(args.defaultValue.start)" :fillMode="'outline'" :disabled="true" />
        </div>
        <div>
          <NumericTextBox :label="'End'" :value="Number.parseInt(args.defaultValue.end)" :fillMode="'outline'" :disabled="true" />
        </div>
      </div>
    `,
  }),
};
