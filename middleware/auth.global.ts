import { useCookie } from "#app";
import useAxios from "~/composables/useAxios";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { sendRequest } = useAxios();
  const authStore = useAuthStore();
  const cookies = useCookie("token");
  const token = cookies.value;
  const isAuth = ref(false);
  if (authStore.isActive) isAuth.value = authStore.isActive;
  else {
    const res = await sendRequest({
      method: "GET",
      url: "/panel/profile",
      data: {},
      newHeader: {},
    });
    if (res.status === 200) {
      authStore.saveUserData(res.data.data);
      authStore.isActive = res.data.data.isActive;
    } else return navigateTo("/");
  }

  if (to.path === "/" && token) {
    return navigateTo("/profile");
  } else if (
    to.path.includes("/Auth") &&
    token &&
    from.path !== "/Auth/Verify"
  ) {
    return navigateTo("/profile");
  } else if (to.path.includes("/profile") && !token) {
    return navigateTo("/");
  } else if (
    !isAuth.value &&
    to.path !== "profile-panel" &&
    to.path !== "profile" &&
    !to.fullPath.includes("/Auth")
  ) {
    return navigateTo(from.fullPath);
  }
});
