<template>
      <button type="button" :class="classes" @click="$emit('click')" :style="style">{{ title }}</button>
</template>

<script>
import { computed, reactive } from "vue";

export default {
      name: "Button",

      props: {
            title: {
                  type: String,
                  required: true,
            },
            primary: {
                  type: Boolean,
                  default: false,
            },
            size: {
                  type: String,
                  validator: function (value) {
                        return ["small", "medium", "large"].indexOf(value) !== -1;
                  },
            },
            backgroundColor: {
                  type: String,
            },
      },

      emits: ["click"],

      setup(props) {
            props = reactive(props);
            return {
                  classes: computed(() => ({
                        btn: true,
                        "btn--primary": props.primary,
                        "btn--secondary": !props.primary,
                        [`btn--${props.size || "medium"}`]: true,
                  })),

                  style: computed(() => ({
                        backgroundColor: props.backgroundColor,
                  })),
            };
      },
};
</script>

<style scoped>
.btn {
      display: inline-block;
      cursor: pointer;
      border: 0;
      border-radius: 3em;
      font-weight: 700;
      line-height: 1;
      font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.btn--primary {
      background-color: #555ab9;
      color: white;
}
.btn--secondary {
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
      background-color: transparent;
      color: #333;
}
.btn--small {
      padding: 10px 16px;
      font-size: 12px;
}
.btn--medium {
      padding: 11px 20px;
      font-size: 14px;
}
.btn--large {
      padding: 12px 24px;
      font-size: 16px;
}
</style>
