import { fn } from "storybook/test";
import Button from "@/components/Button.vue";

export default {
      title: "Example/Components/Buttons",
      component: Button,
      tags: ["autodocs"],
      argTypes: {
            size: {
                  control: { type: "select" },
                  options: ["small", "medium", "large"],
            },
            backgroundColor: {
                  control: "color",
            },
      },
      args: {
            onclick: fn(),
      },
};

export const Primary = {
      args: {
            primary: true,
            title: "Button",
      },
};

export const Secondary = {
      args: {
            title: "Button",
      },
};

export const Large = {
      args: {
            size: "large",
            title: "Button",
      },
};

export const Small = {
      args: {
            size: "small",
            title: "Button",
      },
};
