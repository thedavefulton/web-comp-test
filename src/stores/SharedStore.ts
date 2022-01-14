import { defineStore } from "pinia";

export const sharedStore = defineStore("user", {
  state: () => {
    return {
      input: "",
    };
  },
});
