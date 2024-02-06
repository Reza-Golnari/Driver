// @ts-ignore
import Cookie from "js-cookie";

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const token = Cookie.get("token");
    if (to.fullPath === "/" && token) return navigateTo("/profile/panel");
    else if (
      to.fullPath.includes("/Auth") &&
      token &&
      from.path !== "/Auth/Verify"
    )
      return navigateTo("/profile/panel");
    else if (to.fullPath.includes("/profile") && !token) return navigateTo("/");
    else return;
  }
});
