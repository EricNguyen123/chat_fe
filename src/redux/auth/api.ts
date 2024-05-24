import Axios, { AxiosResponse } from "axios";

export const signinApi = (data: any): Promise<AxiosResponse> => {
  return Axios.post("/register", {
    email: data.email,
    password: data.password,
    name: data.name,
  });
};

export const loginApi = (data: any): Promise<AxiosResponse> => {
  return Axios.post("/login", {
    email: data.email,
    password: data.password,
  });
};

export const logoutApi = (): Promise<AxiosResponse> => {
  return Axios.delete("/login/sign_out");
};

