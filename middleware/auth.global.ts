import { useCookie } from "#app";
import useAxios from "~/composables/useAxios";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { sendRequest } = useAxios();
  const authStore = useAuthStore();
  const cookies = useCookie("token");
  const token = cookies.value;
  const isAuth: any = ref(false);
  if (authStore && authStore.isActive)
    isAuth.value = computed(() => authStore.isActive);
  else {
    if (token) {
      const res = await sendRequest({
        method: "GET",
        url: "/panel/profile",
        data: {},
        newHeader: {},
      });
      if (res.status === 200) {
        authStore.saveUserData(res.data.data);
        if (authStore && authStore.isActive)
          authStore.isActive = res.data.data.isActive;
        else isAuth.value = res.data.data.isActive;
      } else return navigateTo("/");
    }
  }

  if (to.path === "/" && token) {
    return navigateTo("/profile");
  } else if (
    to.path.includes("/Auth") &&
    token &&
    from.path !== "/Auth/Verify"
  ) {
    return navigateTo("/profile");
  } else if (to.path === "profile" && isAuth.value) {
    return;
  } else if (to.fullPath.includes("/profile") && !token && !isAuth.value) {
    return navigateTo("/");
  }
});
