import axios from "axios";
import Cookie from "js-cookie";

export default function useAxios() {
  const config = useRuntimeConfig();
  const BASEURL = config.public.API_BASE_URL;
  const token = Cookie.get("token");

  console.log(token);

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/vnd.api+json",
  };

  if (token) headers.Authorization = `Bearer ${token}`;
  console.log(headers);

  async function sendRequest({ method, url, data, newHeader }) {
    console.log({
      ...headers,
      ...newHeader,
    });
    try {
      const response = await axios({
        method,
        url: BASEURL + url,
        data,
        headers: {
          ...headers,
          ...newHeader,
        },
      });
      return response.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  return { sendRequest };
}
