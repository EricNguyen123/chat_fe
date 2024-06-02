import { AxiosResponse } from "axios";
import api from '../../utils/api';

export const getPostApi = (data: any): Promise<AxiosResponse> => {
  return api.get(`/posts/${data.id}`);
};

export const getPostsApi = (): Promise<AxiosResponse> => {
  return api.get('/posts');
};

export const getUserPostsApi = (data: any): Promise<AxiosResponse> => {
  return api.get(`/posts/user_posts/${data.id}`);
};

export const postPostsApi = (data: any): Promise<AxiosResponse> => {
  return api.post("/posts", data.formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

export const updatePostsApi = (data: any): Promise<AxiosResponse> => {
  return api.put(`/posts/${data.postId}`, data.formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

export const deletePostsApi = (data: any): Promise<AxiosResponse> => {
  return api.delete(`/posts/${data.postId}`);
};
