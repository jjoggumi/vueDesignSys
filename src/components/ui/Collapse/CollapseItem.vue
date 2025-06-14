<template>
  <div
    class="collapsList"
    :class="{ active: active, on: isActive, nonChild: nonChild }"
  >
    <div class="collapsible" @click="toggleCollapse">
      <slot name="tit"></slot>
    </div>
    <transition
      name="collaps"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
    >
      <div class="collapsCon" v-if="active">
        <slot name="con"></slot>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "ComponentsCollapse",
  props: {
    isActive: Boolean,
    nonChild: Boolean,
  },
  data() {
    return {
      active: this.isActive,
    };
  },
  methods: {
    toggleCollapse() {
      this.active = !this.active;
    },
    beforeEnter: function (el) {
      el.style.height = "0";
    },
    enter: function (el) {
      el.style.height = el.scrollHeight + "px";
    },
    beforeLeave: function (el) {
      el.style.height = el.scrollHeight + "px";
    },
    leave: function (el) {
      el.style.height = "0";
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/style/main" as var;

.collapsList {
  margin-bottom: 0.3125rem;

  .collapsible {
    width: 100%;
    padding: 0.25rem 0.3125rem;
    border: 1px solid #ddd;
    border-radius: 0.3125rem;
    background: #f5f5f5;
    text-align: left;
    font-weight: var.$font-weight-bold;

    ::v-deep {
      a,
      span {
        color: var.$body-color;
        font-size: 0.875rem;
        text-decoration: none;
      }
    }

    &:after {
      content: "";
      display: block;
      width: 0.3125rem;
      height: 0.3125rem;
      float: right;
      margin: 0.625rem 0.375rem;
      border-right: 0.0625rem solid #333;
      border-bottom: 0.0625rem solid #333;
      transform: rotate(45deg);
      transition: 0.5s;
    }
  }
  .collapsCon {
    overflow: hidden;
    transition: 0.5s;

    .inner {
      padding: 0.625rem;
    }
  }
  &.active {
    .collapsible:after {
      transform: rotate(-135deg);
    }
    .collapsCon {
      transition: 0.5s;
    }
  }
}

.collapseSet.type01 {
  .collapsList {
    border: 1px solid #ddd;
    border-radius: 0.3125rem;
    margin-bottom: 0.3125rem;

    .collapsible {
      border-radius: 0;
      border: 0;
      border-bottom: 1px solid #eee;
    }
  }
}
</style>