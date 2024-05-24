
export type Action = {
  type: string;
  payload?: any;
};

export type AuthState = {
  loading: boolean;
  userInfo: any | undefined;
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
    "access-token": string;
    client: string;
    uid: string;
  };
};

export type ResponseResult = ErrorResponse & SuccessResponse;
