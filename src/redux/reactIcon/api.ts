import { AxiosResponse } from "axios";
import api from '../../utils/api';

export const getReactApi = (data: any): Promise<AxiosResponse> => {
  return api.get(`/reacts`, {
    params: {
      postId: data.postId,
    },
  });
};

export const postReactApi = (data: any): Promise<AxiosResponse> => {
  return api.post(`/reacts`, {
    postId: data.postId,
    userId: data.userId,
    action: data.action,
  });
};

export const deleteReactApi = (data: any): Promise<AxiosResponse> => {
  return api.delete(`/reacts`, {
    params: {
      postId: data.postId,
      userId: data.userId,
    }
  });
};
