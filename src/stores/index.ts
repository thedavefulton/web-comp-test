import {createPinia} from "pinia";
import {useUserStore} from "./useUserStore";

const pinia = createPinia();

export function userStore() {
    return useUserStore(pinia);
}