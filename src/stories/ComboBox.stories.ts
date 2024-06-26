import{ Meta, StoryObj } from "@storybook/vue3";
import{ ComboBox } from "@progress/kendo-vue-dropdowns";

const items = [
    "Basketball",
    "Football",
    "Tennis",
    "Volleyball",
];

const meta: Meta<typeof ComboBox> = {
  title: "Feather K/ComboBox",
  // title: "Feather K/DropDowns/ComboBox",
  component: ComboBox,
  // #region autodocs
  parameters: {
    docs: {
      description: {
        component:
          `<p>ComboBox is a form component that provides a list of options.</p>` +
          `<h3>Links</h3>` +
          `<ul>
            <li><a href="https://www.telerik.com/kendo-vue-ui/components/dropdowns/api/ComboBoxProps/" target="_blank">ComboBox API</a></li>
            <li><a href="https://www.telerik.com/kendo-vue-ui/components/dropdowns/combobox/" target="_blank">ComboBox Documentation</a></li>
          </ul>` +
          `<div className="fk-emmet">
            <fieldset>
              <legend>fk-combobox</legend>
              <pre>
                &lt;ComboBox 
                  :dataItems="['Baseball', 'Basketball', 'Football', 'Golf', 'Tennis']" 
                  label="Favorite sport" 
                  fillMode="outline" 
                  rounded="medium" 
                  size="medium" 
                /&gt;
              </pre>
            </fieldset>
          </div>`,
      },
    },
  },
  // #endregion autodocs
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {
    label: { control: "text" },
    dataItems: { control: "object" },
    fillMode: { control: "select", options: ["solid", "outline"] },
    rounded: { control: "select", options: ["full", "small", "medium", "large"] },
    size: { control: "select", options: ["small", "medium", "large"] },
  },
  args: {
    label: "Favorite Sport",
    dataItems: items,
    fillMode: "outline",
    rounded: "medium",
    size: "medium",
  },
};