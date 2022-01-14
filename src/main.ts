import {defineCustomElement} from "vue";
import Banner from "./components/Banner.ce.vue";
import BannerChild from "./components/BannerChild.ce.vue"
import Unrelated from "./components/Unrelated.ce.vue"

export function register() {
    const BannerCE = defineCustomElement(Banner);
    const BannerChildCE = defineCustomElement(BannerChild);
    const UnrelatedCE = defineCustomElement(Unrelated)

    customElements.define('my-banner', BannerCE);
    customElements.define('my-banner-child', BannerChildCE);
    customElements.define('my-unrelated', UnrelatedCE);
}

register();
