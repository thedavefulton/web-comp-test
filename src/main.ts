import { defineCustomElement } from "vue";
import _kebabCase from "lodash/kebabCase";

const components = [
  "BaseCard",
  "TitleCard",
  "FirstCard",
  "SecondCard",
  "ThirdCard",
  "PropDemoCard",
];
export async function register() {
  for (const compName of components) {
    const element = `ark-${_kebabCase(compName)}`;
    const comp = await import(`./components/${compName}.ce.vue`);
    customElements.define(element, defineCustomElement(comp.default));
  }
}

await register();
