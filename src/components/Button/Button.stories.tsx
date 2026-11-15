
import type { Meta, StoryObj } from "storybook/react";
import { Button } from "./Button";

// Configure how our Button appears in Storybook.
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },

  // Controls allow us to change properties in Storybook.
  argTypes: {
    children: {
      control: "text",
      description: "Text displayed inside the button",
    },
    backgroundColor: {
      control: "color",
      description: "Button background colour",
    },
    textColor: {
      control: "color",
      description: "Button text colour",
    },
    disabled: {
      control: "boolean",
      description: "Enable or disable the button",
    },
  },

  // Default properties for the component.
  args: {
    children: "Click Me",
    backgroundColor: "#2563eb",
    textColor: "#ffffff",
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// Story 1: Normal button.
export const Default: Story = {
  args: {
    children: "Click Me",
    disabled: false,
  },
};

// Story 2: Disabled button.
export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

// Story 3: Button with custom colours.
export const CustomColors: Story = {
  args: {
    children: "Custom Button",
    backgroundColor: "#16a34a",
    textColor: "#ffffff",
    disabled: false,
  },
};
