import { useCookie } from "#app";

export default defineNuxtRouteMiddleware((to, from) => {
  const cookies = useCookie("token");
  const token = cookies.value;

  if (to.path === "/" && token) {
    return navigateTo("/profile/panel");
  } else if (
    to.path.includes("/Auth") &&
    token &&
    from.path !== "/Auth/Verify"
  ) {
    return navigateTo("/profile/panel");
  } else if (to.path.includes("/profile") && !token) {
    return navigateTo("/");
  }
});
