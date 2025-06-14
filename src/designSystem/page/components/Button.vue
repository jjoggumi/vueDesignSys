<template>
  <article class="buttonSys type01">
    <div class="sections">
      <section>
        <h2>Btn Type</h2>
        <div>
          <Buttons color="primary">Basic</Buttons>
          <Buttons color="primary" round>Round</Buttons>
          <Buttons color="primary" square>Square</Buttons>
        </div>
        <div>
          <Buttons color="outline-primary">Outline</Buttons>
          <Buttons color="outline-primary" round>Outline Round</Buttons>
          <Buttons color="outline-primary" square>Outline Square</Buttons>
        </div>
      </section>
      <section>
        <h2>Btn Color</h2>
        <!-- <template v-for="(color, i) in color" :key="i">
          
          <Buttons :color="color.value">{{ color.value }}</Buttons>
        </template> -->
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-secondary">Secondary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-danger">Danger</button>
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-info">Info</button>
        <button type="button" class="btn btn-light">Light</button>
        <button type="button" class="btn btn-dark">Dark</button>

        <br />

        <button type="button" class="btn btn-link">Link</button>
      </section>
      <section>
        <h2>Btn Outline Color</h2>
        <button type="button" class="btn btn-outline-primary">Primary</button>
        <button type="button" class="btn btn-outline-secondary">
          Secondary
        </button>
        <button type="button" class="btn btn-outline-success">Success</button>
        <button type="button" class="btn btn-outline-danger">Danger</button>
        <button type="button" class="btn btn-outline-warning">Warning</button>
        <button type="button" class="btn btn-outline-info">Info</button>
        <button type="button" class="btn btn-outline-light">Light</button>
        <button type="button" class="btn btn-outline-dark">Dark</button>
        <!-- <template v-for="(color, i) in color" :key="i">
          <span>
            <span
              v-if="color.value === 'white'"
              style="
                background: rgb(71 120 222);
                display: inline-block;
                padding: 5px;
                border-radius: 5px;
              "
            >
              <Buttons color="line-white">white</Buttons>
            </span>
            <Buttons
              v-else-if="color.value === 'disabled'"
              color="line-primary"
             
              disabled
              >disabled</Buttons
            >
            <Buttons v-else-if="color.value === 'link'" color="link"
              >link</Buttons
            >
            <Buttons v-else :color="`line-${color.value}`">{{
              color.value
            }}</Buttons>
          </span>
        </template> -->
      </section>
      <section>
        <h2>Btn Tag</h2>
        <a class="btn btn-primary" href="#" role="button">Link</a>
        <button class="btn btn-primary" type="submit">Button</button>
        <input class="btn btn-primary" type="button" value="Input" />
        <input class="btn btn-primary" type="submit" value="Submit" />
        <input class="btn btn-primary" type="reset" value="Reset" />
      </section>
      <section>
        <h2>Btn Size</h2>
        <div>
          <button type="button" class="btn btn-primary btn-lg">
            Large button
          </button>
          <button type="button" class="btn btn-primary">Medium button</button>
          <button type="button" class="btn btn-primary btn-sm">
            Small button
          </button>
          <button type="button" class="btn btn-primary w-100">
            Block button
          </button>
          <!-- <Buttons color="primary" size="xl">extraLarge</Buttons>
          <Buttons color="primary" size="lg">large</Buttons>
          <Buttons color="primary">medium</Buttons>
          <Buttons color="primary" size="sm">small</Buttons>
          <Buttons color="primary" size="xs">extraSmall</Buttons>
          <Buttons color="primary" size="block">width 100%</Buttons> -->
        </div>
      </section>
    </div>
    <div class="ctrArea">
      <div class="optArea">
        <div class="elArea">
          <button
            type="button"
            :class="[
              'hi-btn',
              propsVal.color
                ? propsVal.outline === true
                  ? 'btn-line-' + propsVal.color
                  : 'btn-' + propsVal.color
                : null,
              propsVal.shap ? 'btn-' + propsVal.shap : '',
              propsVal.size ? 'btn-' + propsVal.size : '',
              propsVal.block === true ? 'btn-block' : '',
            ]"
            :disabled="propsVal.disabled === true"
          >
            Button element
          </button>
          <Buttons
            :color="propsVal.color"
            :size="propsVal.size"
            :outline="propsVal.outline === true"
            :disabled="propsVal.disabled === true"
            :block="propsVal.block === true"
            :bitrounded="propsVal.shap === 'bitrounded'"
            :square="propsVal.shap === 'square'"
          >
            Buttons Component
          </Buttons>
        </div>
        <ul class="propArea">
          <li>
            <label>COLOR</label>
            <hi-select-box
              :value="propsVal.color"
              @update:value="propsVal.color = $event"
              :items="propsOpt.color"
              empty-title="COLOR"
            />
          </li>
          <li>
            <label>OUTLINE</label>
            <hi-switch
              v-model="propsVal.outline"
              @update:model="propsVal.outline = $event"
              :disabled="propsVal.color === 'link'"
            />
          </li>
          <li>
            <label>ROUNDED</label>
            <hi-select-box
              :value="propsVal.shap"
              @update:value="propsVal.shap = $event"
              :items="propsOpt.shap"
              empty-title="SHAP"
              :disabled="propsVal.color === 'link'"
            />
          </li>
          <li>
            <label>SIZE</label>
            <hi-select-box
              :value="propsVal.size"
              @update:value="propsVal.size = $event"
              :items="propsOpt.size"
              empty-title="SIZE"
              :disabled="propsVal.color === 'link'"
            />
          </li>
          <li>
            <label>BLOCK</label>
            <hi-switch
              v-model="propsVal.block"
              @update:model="propsVal.block = $event"
              :disabled="propsVal.color === 'link'"
            />
          </li>
          <li>
            <label>DISABLED</label>
            <hi-switch
              v-model="propsVal.disabled"
              @update:model="propsVal.disabled = $event"
              :disabled="propsVal.color === 'link'"
            />
          </li>
        </ul>
      </div>
      <div class="codeArea">
        <pre>
          <code v-html="generatedCode"></code>
        </pre>
      </div>
    </div>
  </article>
</template>

<script>
import designsysData from "@/designSystem/assets/js/designsysData.js";
import Buttons from "@/components/ui/Button/Buttons.vue";

export default {
  name: "ComponentsButtons",
  data() {
    return {
      color: designsysData.btnColor,
      size: designsysData.size,
      propsVal: {
        shap: "",
        color: "link",
        outline: false,
        disabled: false,
        size: "",
        block: false,
      },
      propsOpt: {
        shap: [
          { value: "", title: "rounded" },
          { value: "bitrounded", title: "bitrounded" },
          { value: "square", title: "square" },
        ],
        color: designsysData.btnColor,
        size: designsysData.size,
      },
    };
  },
  components: {
    Buttons,
  },
  computed: {
    generatedCode() {
      // Generate class list for the button element
      const classes = [
        "hi-btn",
        this.propsVal.color
          ? this.propsVal.outline === true
            ? `btn-line-${this.propsVal.color}`
            : `btn-${this.propsVal.color}`
          : null,
        this.propsVal.shap ? `btn-${this.propsVal.shap}` : "",
        this.propsVal.size ? `btn-${this.propsVal.size}` : "",
        this.propsVal.block === true ? `btn-block` : "",
      ]
        .filter(Boolean)
        .join(" ");

      const hiBtnAttrs = [this.propsVal.disabled ? `disabled` : ""]
        .filter(Boolean)
        .join(" ");

      // Generate Buttons component attributes
      const ButtonsAttrs = [
        this.propsVal.color
          ? this.propsVal.outline === true
            ? `color="line-${this.propsVal.color}"`
            : `color="${this.propsVal.color}"`
          : null,
        this.propsVal.size ? `size="${this.propsVal.size}"` : "",
        this.propsVal.disabled ? `disabled` : "",
        this.propsVal.block ? `block` : "",
        this.propsVal.shap === "bitrounded" ? `bitrounded` : "",
        this.propsVal.shap === "square" ? `square` : "",
      ]
        .filter(Boolean)
        .join(" ");

      // Generate HTML code for the button and Buttons component
      return `
      &lt;button type="button" class="${classes}" ${hiBtnAttrs}&gt;
        Button element
      &lt;/button&gt;

      &lt;Buttons ${ButtonsAttrs}&gt;
        Buttons Component
      &lt;/Buttons&gt;
    `;
    },
  },
};
</script>
<style lang="scss" scoped>
.buttonSys {
  .btn {
    margin: 0.3rem;
  }
}
</style>
