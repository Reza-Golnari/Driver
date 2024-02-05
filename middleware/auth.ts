// @ts-ignore
import Cookie from "js-cookie";

export default defineNuxtRouteMiddleware((to, from) => {
  const token = Cookie.get("token");

  if (!token) navigateTo("/");

  if (token && to.fullPath.includes("/Auth")) navigateTo("/profile/panel");
  else if (token && to.fullPath === "/") navigateTo("/profile/panel");
});

// export default defineNuxtRouteMiddleware((to) => {
//   if (to.fullPath.includes("/users")) {
//     return;
//   } else if (to.fullPath.includes("/dashboard")) {
//     if (!store.getters["auth/isAuth"]) {
//       return navigateTo("/login");
//     }
//   } else if (to.fullPath === "/login" || to.fullPath === "/register") {
//     if (store.getters["auth/isAuth"]) {
//       return navigateTo("/");
//     }
//   }
// });
