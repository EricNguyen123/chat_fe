export type Action = {
    type: string;
    payload?: any;
};

export type AuthState = {
    loading: boolean;
    userInfo: any | undefined;
};

export type RoomState = {
    loading: boolean;
    rooms: any | undefined;
    room: any | undefined;
};

export type PostState = {
    loading: boolean;
    post: any | undefined;
    posts: any | undefined;
    user_posts: any | undefined;
};

export type ReactState = {
    loading: boolean;
    react: any | undefined;
    reacts: any | undefined;
};

export type UploadFile = {
    loading: boolean;
    media: any | undefined;
};

type ErrorResponse = {
    message: string;
    name: string;
    response: {
        status: number;
        statusText: string;
        data: {
            errors: string[];
            success: boolean;
        };
    };
};

type SuccessResponse = {
    status: number;
    statusText: string;
    data: {
        errors: string[];
        success: boolean;
        screen: string;
    };
    headers: {
        'access-token': string;
        client: string;
        uid: string;
    };
};

export type ResponseResult = ErrorResponse & SuccessResponse;
