import { AxiosResponse } from "axios";
import api from '../../utils/api';

export const getUserApi = (): Promise<AxiosResponse> => {
  return api.get("/my_acount");
};

export const getUsersApi = (): Promise<AxiosResponse> => {
  return api.get("/users");
};

export const getOtherUserApi = (data: any): Promise<AxiosResponse> => {
  return api.get(`/user/${data.id}`);
};

export const followingApi = (data: any): Promise<AxiosResponse> => {
  return api.get(`/relationships/follow/${data.id}`);
};

export const unfollowApi = (data: any): Promise<AxiosResponse> => {
  return api.get(`/relationships/unfollow/${data.id}`);
};
