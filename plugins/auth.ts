import { useCookie } from "#app";
import useAxios from "~/composables/useAxios";

export default defineNuxtPlugin((app): any => {
  app.hook("app:mounted", async (): Promise<any> => {
    const { sendRequest } = useAxios();
    const authStore = useAuthStore();
    const cookies = useCookie("token");
    const token = cookies.value;
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
          authStore.user.isActive = res.data.data.isActive;
        }
      } else return navigateTo("/");
    }
  });
});
