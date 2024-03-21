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
        isActive: null,
      },
      location: {
        long: null,
        lat: null,
      },
      barNumber: 0,
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
      navigateTo("/");
    },

    setUserLocation(long, lat) {
      this.location.long = long;
      this.location.lat = lat;
    },
  },

  getters:{
    userRole(){
      return this.user.role
    }
  }
});
