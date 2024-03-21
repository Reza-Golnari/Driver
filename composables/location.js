import axios from 'axios';
import useAxios from "~/composables/useAxios.js";

export default async function locationHandler() {
  const {sendRequest} = useAxios();

  const authStore = useAuthStore();
  const appStore = useAppStore()

  try{
      const userIP = await axios({
          method: "GET",
          url: "https://api.ipify.org/?format=json"
      });

      const userLocation = await axios({
          method: "GET",
          url: `http://ip-api.com/json/${userIP.data.ip}`
      });

      authStore.setUserLocation(userLocation.data.lon , userLocation.data.lat)

      const res = await sendRequest({
          method: 'POST',
          url: "/panel/driver/advertisers/nearby",
          data:{
              lat: authStore.location.lat,
              long: authStore.location.long
          }
      });

      if(res.status === 200) authStore.barNumber = res.data.data.length;
      else appStore.showAlert(true , "مشکلی در گرفتن بارهای نزدیک شما بوجود آمد")
  }catch(err){
      appStore.showAlert(true , "مشکلی در گرفتن بارهای نزدیک شما بوجود آمد")
  }
}
