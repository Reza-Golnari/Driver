import { defineStore } from "pinia";
import Cookie from "js-cookie";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      loginData: {},
      token: "",
      isLoggedIn: false,
      user: {},
    };
  },
  persist: true,

  actions: {
    saveLoginData(loginObject) {
      this.loginData = { ...loginObject };
    },

    saveUserData(data) {
      this.user = data;
    },

    logout() {
      Cookie.remove("token");
    },
  },
});
