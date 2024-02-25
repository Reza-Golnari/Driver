export default async function locationHandler() {
  const authStore = useAuthStore();
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      authStore.setUserLocation(
        position.coords.longitude,
        position.coords.latitude
      );
    });
  } else {
    console.log("error");
  }
}
