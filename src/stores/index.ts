import { createPinia } from "pinia";
import { sharedStore } from "./SharedStore";

const pinia = createPinia();

export function useSharedStore() {
  return sharedStore(pinia);
}
