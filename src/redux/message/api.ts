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
