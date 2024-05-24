import axios from "axios";

export const setAuthToken = (headers: any): void => {
  if (Object.keys(headers).length > 0 && typeof headers === "object") {
    axios.defaults.headers.common = headers;
  }
};
