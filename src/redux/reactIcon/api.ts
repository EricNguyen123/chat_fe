import { AxiosResponse } from 'axios';
import api from '../../utils/api';

export const getReactApi = (data: any): Promise<AxiosResponse> => {
    return api.get(`/reacts`, {
        params: {
            postId: data.postId,
            messageId: data.messageId,
        },
    });
};

export const postReactApi = (data: any): Promise<AxiosResponse> => {
    return api.post(`/reacts`, {
        postId: data.postId,
        userId: data.userId,
        action: data.action,
        messageId: data.messageId,
    });
};

export const deleteReactApi = (data: any): Promise<AxiosResponse> => {
    return api.delete(`/reacts`, {
        params: {
            postId: data.postId,
            userId: data.userId,
            messageId: data.messageId,
        },
    });
};
