import { useCookie } from "#app";
import useAxios from "~/composables/useAxios";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { sendRequest } = useAxios();
  const authStore = useAuthStore();
  const cookies = useCookie("token");
  const token = cookies.value;
  const isAuth: any = ref(null);
  if (authStore && authStore.user) isAuth.value = authStore.user.isActive;

  if (token) {
    const res = await sendRequest({
      method: "GET",
      url: "/panel/profile",
      data: {},
      newHeader: {},
    });
    if (res.status === 200) {
      authStore.saveUserData(res.data.data);
      if (res.data.data?.isActive) {
        if (authStore && authStore.user)
          authStore.user.isActive = res.data.data.isActive;
        isAuth.value = res.data.data.isActive;
      }
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
  } else if (to.path === "profile" && isAuth.value) {
    return;
  } else if (to.fullPath.includes("/profile") && !token) {
    return navigateTo("/Auth");
  }
});
