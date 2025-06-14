<template>
  <article class="colorSys">
    <div class="sections">
      <section>
        <h5>Gray Scale</h5>
        <ul class="gray">
          <li>
            <p class="tit">White</p>
            <p class="color">
              $white<br />
              #FFF
            </p>
          </li>
          <li v-for="(a, i) in 9" :key="i" :class="`gray-${a}00`">
            <p class="tit">Gray</p>
            <p class="color">$gray-{{ a }}00</p>
          </li>
          <li>
            <p class="tit">Black</p>
            <p class="color">$black<br />#000</p>
          </li>
        </ul>
      </section>
      <section>
        <h5>Primary Color</h5>
        <div class="primaryWrap">
          <div class="primary">
            <p class="tit">Primary</p>
            <p class="color">$primary</p>
          </div>
          <ul class="primarySub">
            <template v-for="(a, i) in 9" :key="i">
              <li v-if="a !== 5" :class="`primary-` + a + `00`">
                $primary-{{ a }}00
              </li>
            </template>
          </ul>
        </div>
      </section>
      <div class="row no-gutters sideColorWrap">
        <div class="col-4" v-for="(side, i) in sideColor" :key="i">
          <section>
            <h2>{{ side.name }} Color</h2>
            <div class="sideColor" :style="`background-color:` + side.color">
              <p class="tit">{{ side.name }}</p>
              <p class="color">{{ side.color }}<br />var(--{{ side.name }})</p>
            </div>
            <ul class="sideColorSub">
              <template v-for="(a, i) in 5" :key="i">
                <li v-if="a !== 3" :class="side.name + `-` + a + `00`">
                  <span>${{ side.name }}-{{ a }}00</span>
                </li>
              </template>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
const sideColor = [
  {
    name: "secondary",
    color: "#31415F",
  },
  {
    name: "success",
    color: "#00C394",
  },
  {
    name: "info",
    color: "#00A3FF",
  },
  {
    name: "warning",
    color: "#FFA800",
  },
  {
    name: "danger",
    color: "#E30029",
  },
  {
    name: "special",
    color: "#6223FD",
  },
];
</script>

<style lang="scss" scoped>
@use "@/assets/style/main" as var;

@mixin subColor($map, $prefix) {
  @each $key, $value in $map {
    &.#{$prefix}-#{$key} {
      background: $value;
      &::after {
        display: block;
        content: "#{$value}";
      }
    }
  }
}

.colorSys {
  h2 {
    text-transform: capitalize;
  }
  p {
    color: #fff;
    &.tit {
      margin: 0.625rem 0 0.625rem;
      font-size: 1.25rem;
      font-weight: var.$font-weight-medium;
    }
    &.color {
      margin-bottom: 0;
      font-size: 0.8125rem;
      color: rgba(var.$white, 0.6);
    }
  }
  .gray {
    display: flex;
    background: #fff;
    padding: 0;

    li {
      width: 100%;
      padding: 1.25rem 0;
      color: #fff;
      list-style-type: none;

      p {
        text-align: center;
      }
      &::after {
        text-align: center;
        font-size: 0.8125rem;
      }

      &:first-child {
        background-color: #fff;
      }
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4),
      &:nth-child(5) {
        p {
          &.tit {
            color: var.$body-color;
          }
          &.color {
            color: rgba(var.$body-color, 0.6);
          }
        }
        &::after {
          color: rgba(var.$body-color, 0.6);
        }
      }
      @include subColor(var.$grays, "gray");

      &:last-child {
        background-color: #000;
      }
    }
  }
  .primaryWrap {
    display: flex;
    flex-wrap: wrap;

    .primary {
      display: flex;
      align-items: start;
      justify-content: flex-end;
      flex-flow: column;
      width: 25%;
      background: var.$primary;

      .tit {
        color: #fff;
        font-size: 1.25rem;
        padding: 0 0.9375rem;
      }
      .color {
        padding: 0.3125rem 0.9375rem 0.9375rem;
      }
    }
    .primarySub {
      width: 75%;
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;

      li {
        margin: 0;
        padding: 1.25rem;
        font-size: 0.8125rem;
        height: 5.625rem;
        display: flex;
        flex-flow: column;
        justify-content: flex-end;
        width: 25%;
        color: rgba(255, 255, 255, 0.6);

        @include subColor(var.$primarys, "primary");
      }
    }
  }

  .sideColorWrap {
    .sideColor {
      width: 100%;
      height: 9.375rem;
      display: flex;
      flex-flow: column;
      justify-content: end;
      align-items: flex-start;
      padding: 1.25rem;
    }
    .sideColorSub {
      display: flex;
      margin: 0;
      padding: 0;
      li {
        width: 25%;
        display: flex;
        flex-flow: column;
        justify-content: flex-end;
        height: 3.75rem;
        transition: 0.5s;
        color: rgba(#fff, 0.6);
        padding: 0.625rem;

        p.tit {
          text-transform: capitalize;
        }

        span,
        &::after {
          opacity: 0;
          transition: 0.5s;
          font-size: 0.75rem;
          height: 1.25rem;
          overflow: hidden;
        }

        &:hover {
          width: 15.625rem;
          transition: 0.5s;
          flex-grow: 1;

          span,
          &::after {
            opacity: 1;
            transition: 0.5s;
          }
        }
        @include subColor(var.$secondarys, "secondary");
        @include subColor(var.$successs, "success");
        @include subColor(var.$infos, "info");
        @include subColor(var.$warnings, "warning");
        @include subColor(var.$dangers, "danger");
        @include subColor(var.$specials, "special");
        @include subColor(var.$secondarys, "secondary");
      }
    }
  }
}
</style>