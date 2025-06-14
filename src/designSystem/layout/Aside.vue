<template>
  <aside>
    <div class="navBrand">
      <a href="@/">Creative Lab</a>
    </div>
    <div class="collapseSet">
      <CollapseItem
        v-for="(route, index) in routes"
        :key="index"
        :isActive="mainCate === route.name"
        :nonChild="!route.children"
      >
        <template #tit>
          <router-link :to="route.path" v-if="!route.children">
            <template v-if="route.name !== 'Pub'"> {{ route.name }}</template>
          </router-link>
          <span v-else>{{ route.name }}</span>
        </template>
        <template #con>
          <div
            v-for="(childRoute, subIndex) in route.children"
            :key="subIndex"
            class="item"
          >
            <router-link :to="route.path + '/' + childRoute.path">{{
              childRoute.name
            }}</router-link>
          </div>
        </template>
      </CollapseItem>
    </div>
  </aside>
</template>

<script setup>
import CollapseItem from "@/components/ui/Collapse/CollapseItem.vue";
const props = defineProps({
  routes: {
    type: Array,
    required: true,
  },
  mainCate: {
    type: String,
    default: "",
  },
});
</script>
<style lang="scss" scoped>
@use "@/assets/style/main" as var;
aside {
  width: 15.625rem;
  min-width: 15.625rem;
  height: 100dvh;
  background-color: #242745;
  color: #fff;
  font-family: var.$font-family-base;

  .navBrand {
    height: 6.875rem;

    a {
      display: block;
      padding: 1.5rem;
      color: #fff;
      text-align: center;
      font-weight: var(--font-bold);
      font-size: 0.8125rem;

      &::before {
        display: block;
        content: "";
        background: url(@/designSystem/assets/img/logo.svg);
        background-size: 100%;
        width: 2.5rem;
        height: 2.5rem;
        margin: 0.625rem auto;
      }
    }
  }

  .collapseSet {
    overflow: auto;
    height: calc(100dvh - 6.875rem);
    padding: 0.3125rem 0;

    .collapsList {
      padding: 0.3125rem;
      border-top: 1px solid #313657;

      :deep(.collapsible) {
        display: flex;
        align-items: center;
        position: relative;
        border: 0;
        border-radius: 0;
        padding: 0.625rem 0.9375rem;
        background: transparent;
        color: rgba(255, 255, 255, 0.4);
        font-size: 0.8125rem;

        &::before {
          content: "";
          display: inline-block;
          width: 1.125rem;
          height: 1.125rem;
          margin-right: 0.3125rem;
          background-color: rgba(255, 255, 255, 0.4);
          mask-repeat: no-repeat;
          mask-position: center left;
          mask-size: contain;
        }

        &::after {
          position: absolute;
          right: 0.625rem;
          border-color: rgba(255, 255, 255, 0.4);
        }

        a,
        span {
          color: rgba(255, 255, 255, 0.4);
          text-decoration: none;
        }
      }
      &:hover :deep(.collapsible),
      &.on :deep(.collapsible) {
        border-radius: 5px;
        color: #fff;

        &::before {
          background-color: #fff;
        }

        &::after {
          border-color: #fff;
        }

        a,
        span {
          color: #fff;
        }
      }

      &.nonChild :deep(.collapsible::after) {
        display: none;
      }

      &:nth-child(1) :deep(.collapsible::before) {
        mask-image: url("@/assets/img/svg/ico-chart.svg");
      }

      &:nth-child(2) :deep(.collapsible::before) {
        mask-image: url("@/assets/img/svg/ico-chart.svg");
      }

      &:nth-child(3) :deep(.collapsible::before) {
        mask-image: url("@/assets/img/svg/ico-chart.svg");
      }

      &:nth-child(4) :deep(.collapsible::before) {
        mask-image: url("@/assets/img/svg/ico-chart.svg");
      }

      &:nth-child(5) :deep(.collapsible::before) {
        mask-image: url("@/assets/img/svg/ico-chart.svg");
      }

      &:nth-child(6) :deep(.collapsible::before) {
        mask-image: url("@/assets/img/svg/ico-chart.svg");
      }
      :deep(.collapsCon) {
        padding: 0;

        .item {
          padding: 0 0.625rem 0.3125rem 40px;

          a {
            color: rgba(255, 255, 255, 0.6);
            font-size: 0.9375rem;

            &.router-link-active {
              color: #fff;
              font-weight: var(--font-bold);
            }
          }

          &:first-child {
            padding-top: 0.3125rem;
          }

          &:last-child {
            padding-bottom: 1.25rem;
          }
        }
      }
    }

    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
      background: #3a4064;
      border-radius: 0.625rem;
    }

    &::-webkit-scrollbar-track {
      background: #242745;
    }
  }
}
</style>
