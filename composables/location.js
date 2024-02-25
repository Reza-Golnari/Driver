export default async function locationHandler() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        if (!position.coords) {
          navigator.geolocation.getCurrentPosition(
            function (position) {
              console.log(position);
              return {
                status: 200,
                long: position.coords.longitude,
                lat: position.coords.latitude,
              };
            },
            function (error) {
              console.log(error);

              return {
                status: 400,
                message: error,
              };
            }
          );
        } else {
          console.log(position);

          return {
            status: 200,
            long: position.coords.longitude,
            lat: position.coords.latitude,
          };
        }
      },
      function (error) {
        console.log(error);

        return {
          status: 400,
          message: error,
        };
      }
    );
  } else {
    return {
      status: 404,
      message: "موقعیت مکانی پشتیبانی نمی‌شود",
    };
  }
}
