import Axios, { AxiosResponse } from "axios";

export const uploadFileApi = (data: any): Promise<AxiosResponse> => {
  return Axios.post("/media/upload", data.formData, {
    headers: {
      Authorization: `Bearer ${data.token}`,
      'Content-Type': 'multipart/form-data'
    }
  });
};

export const uploadAvatarApi = (data: any): Promise<AxiosResponse> => {
  return Axios.post("/media/update_avatar", data.formData, {
    headers: {
      Authorization: `Bearer ${data.token}`,
      'Content-Type': 'multipart/form-data'
    }
  });
};

export const getImageApi = (data: any): Promise<AxiosResponse> => {
  return Axios.get(`/media/image/${data.avatar}`, {
    headers: {
      Authorization: `Bearer ${data.token}`,
      'Content-Type': 'multipart/form-data'
    }
  });
};
