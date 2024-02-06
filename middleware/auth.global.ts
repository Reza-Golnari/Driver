// @ts-ignore
import Cookie from "js-cookie";

export default defineNuxtRouteMiddleware((to, from) => {
  const token = Cookie.get("token");
  console.log(token);
  if (!token) navigateTo("/");
  if (token && to.fullPath === "/") navigateTo("/profile/panel");
  else if (token && to.fullPath.includes("/Auth")) navigateTo("/profile/panel");
});
