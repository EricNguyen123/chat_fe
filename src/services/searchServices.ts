import api from '../utils/api';

interface SearchParams {
    q: string;
    type?: string;
}

export const search = async ({ q, type = 'less' }: SearchParams) => {
    try {
        const res = await api.get('users', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
