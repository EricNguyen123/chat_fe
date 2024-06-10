import { TypedUseSelectorHook, useSelector as rawUseSelector } from 'react-redux';
import { combineReducers } from 'redux';

import authReducer from './auth/reducer';
import userReducer from './users/reducer';
import imageUploadReducer from './image-upload/reducer';
import postsReducer from './posts/reducer';
import reactsReducer from './reactIcon/reducer';
import roomsReducer from './room/reducer';

import storage from 'redux-persist/es/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const rootPersistConfig = {
    key: 'root',
    storage,
    blacklist: ['auth', 'users', 'imageUpload', 'posts', 'reacts', 'rooms'],
};

const authPersistConfig = {
    key: 'auth',
    storage,
    blacklist: ['loading'],
};

const reducers = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    users: userReducer,
    imageUpload: imageUploadReducer,
    posts: postsReducer,
    reacts: reactsReducer,
    rooms: roomsReducer,
});

type RootState = ReturnType<typeof reducers>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;

const rootReducer = (state: any, action: any) => {
    return reducers(state, action);
};

export default persistReducer(rootPersistConfig, persistReducer(rootPersistConfig, rootReducer));
