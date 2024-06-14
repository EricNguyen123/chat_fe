import { AxiosResponse } from 'axios';
import api from '../../utils/api';

export const getMessagesApi = (data: any): Promise<AxiosResponse> => {
    return api.get(`/messages/${data.roomId}`);
};

export const postMessagesApi = (data: any): Promise<AxiosResponse> => {
    return api.post('/messages', data.formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

export const deleteMessagesApi = (data: any): Promise<AxiosResponse> => {
    return api.delete(`/messages/${data.id}`);
};

export const voiceMessagesApi = (data: any): Promise<AxiosResponse> => {
    return api.post(`/messages/audio`, data.formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};
