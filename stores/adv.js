import { defineStore } from "pinia";

export const useAdvStore = defineStore("adv", {
  state() {
    return {
      originName: null,
      originID: null,
      destName: null,
      destID: null,
    };
  },
});
