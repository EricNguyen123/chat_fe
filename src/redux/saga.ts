import authSagas from './auth/saga';
import usersSagas from './users/saga';
import imageUploadSaga from './image-upload/saga';
import postsSagas from './posts/saga';
import reactsSaga from './reactIcon/saga';
import roomSaga from './room/saga';

import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([authSagas(), usersSagas(), imageUploadSaga(), postsSagas(), reactsSaga(), roomSaga()]);
}
