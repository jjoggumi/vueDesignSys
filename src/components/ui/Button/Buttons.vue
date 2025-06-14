<template>
  <button
    :class="[classList]"
    :style="customStyle"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "Buttons",
  props: {
    color: String,
    outline: Boolean,
    round: Boolean,
    square: Boolean,
    size: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    style: {
      type: [String, Object],
      default: "",
    },
  },
  computed: {
    classList() {
      const className = ["btn"];
      this.color
        ? className.push(
            this.outline ? `btn-outline-${this.color}` : `btn-${this.color}`
          )
        : null;
      this.round ? className.push("btn-round") : null;
      this.square ? className.push("btn-square") : null;
      this.size ? className.push(`btn-${this.size}`) : null;
      return className.join(" ");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
