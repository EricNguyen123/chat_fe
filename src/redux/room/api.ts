import { AxiosResponse } from 'axios';
import api from '../../utils/api';

export const getRoomApi = (): Promise<AxiosResponse> => {
    return api.get('/rooms');
};

export const postRoomApi = (data: any): Promise<AxiosResponse> => {
    return api.post('/rooms', data);
};

export const postGroupRoomApi = (data: any): Promise<AxiosResponse> => {
    return api.post('/rooms/groups', data.formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};
