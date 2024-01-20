import axios from "axios";
import Cookie from "js-cookie";

export default function useAxios() {
  const config = useRuntimeConfig();
  const BASEURL = config.public.API_BASE_URL;
  const token = Cookie.get("token");

  const headers = {
    "Content-Type": "application/json",
  };

  if (token) headers.Authorization = `Bearer ${token}`;

  async function sendRequest({ method, url, body }) {
    try {
      axios({
        method,
        url: BASEURL + url,
        body,
      })
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          throw err;
        });
    } catch (err) {
      console.log(err);
    }
  }

  return { sendRequest };
}
