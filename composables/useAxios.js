import axios from "axios";
import Cookie from "js-cookie";

export default function useAxios() {
  const config = useRuntimeConfig();
  const BASEURL = config.public.API_BASE_URL;
  const token = Cookie.get("token");

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/vnd.api+json",
  };

  if (token) headers.Authorization = `Bearer ${token}`;

  async function sendRequest({ method, url, data }) {
    try {
      const response = await axios({
        method,
        url: BASEURL + url,
        data,
        headers,
      });
      return response.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  return { sendRequest };
}
