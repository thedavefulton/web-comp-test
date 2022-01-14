import { defineCustomElement } from "vue";
import _kebabCase from "lodash/kebabCase";

const components = [
  "Banner",
  "BannerChild",
  "Unrelated",
  "BaseCard",
  "TitleCard",
];
export async function register() {
  for (const compName of components) {
    const element = `ark-${_kebabCase(compName)}`;
    const comp = await import(`./components/${compName}.ce.vue`);
    customElements.define(element, defineCustomElement(comp.default));
  }
}

await register();
