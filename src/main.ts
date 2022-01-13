import {defineCustomElement} from "vue";
import Banner from "./components/Banner.ce.vue";
import BannerChild from "./components/BannerChild.ce.vue"

export function register() {
    const BannerCE = defineCustomElement(Banner);
    const BannerChildCE = defineCustomElement(BannerChild);

    customElements.define('my-banner', BannerCE);
    customElements.define('my-banner-child', BannerChildCE);
}

register();
