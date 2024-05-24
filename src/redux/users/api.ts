import Axios, { AxiosResponse } from "axios";

export const getUserApi = (data: any): Promise<AxiosResponse> => {
  return Axios.get("/my_acount", {
    headers: {
      Authorization: `Bearer ${data.token}`
    }
  });
};

export const getUsersApi = (data: any): Promise<AxiosResponse> => {
  return Axios.get("/users", {
    headers: {
      Authorization: `Bearer ${data.token}`
    }
  });
};

export const getOtherUserApi = (data: any): Promise<AxiosResponse> => {
  return Axios.get(`/user/${data.id}`, {
    headers: {
      Authorization: `Bearer ${data.token}`
    }
  });
};
