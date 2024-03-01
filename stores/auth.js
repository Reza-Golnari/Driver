import { defineStore } from "pinia";
import Cookie from "js-cookie";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      loginData: {},
      token: "",
      isLoggedIn: false,
      user: {
        profile_image: "",
        isActive: false,
      },
      location: {
        long: null,
        lat: null,
      },
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
      this.user = {};
    },

    setUserLocation(long, lat) {
      this.location.long = long;
      this.location.lat = lat;
    },
  },
});
