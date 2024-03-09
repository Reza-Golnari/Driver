import { defineStore } from "pinia";

export const useAdvStore = defineStore("adv", {
  state() {
    return {
      originName: null,
      originID: null,
      originLongitude: null,
      originLatitude: null,
      destName: null,
      destID: null,
      destLongitude: null,
      destLatitude: null,
    };
  },
});
