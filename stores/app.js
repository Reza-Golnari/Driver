import { defineStore } from "pinia";

export const useAppStore = defineStore("appStore", {
  state() {
    return {
      isShow: false,
      isError: false,
      message: "",
    };
  },
  actions: {
    showAlert(isError, message) {
      if (this.isShow) return;
      this.isError = isError;
      this.message = message;
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
      }, 2000);
    },
  },
});
