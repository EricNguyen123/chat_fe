import { all, call, put, takeEvery } from 'redux-saga/effects';
import { ResponseResult } from '../../types/redux';
import { getRoomResult, createRoomResult, createGroupRoomResult, getRoom } from './actions';
import { getRoomApi, postRoomApi, postGroupRoomApi } from './api';
import types from './type';

function* getRoomSaga() {
    const res: ResponseResult = yield call(getRoomApi);
    if (res.status === 200) {
        yield put(getRoomResult(res.data));
    } else {
        const isSuccess = false;
        yield put(getRoomResult(res, isSuccess));
    }
}

function* postRoomSaga(props: any) {
    const res: ResponseResult = yield call(postRoomApi, { id: props.payload.id });
    if (res.status === 200) {
        yield put(createRoomResult(res.data));
        yield put(getRoom());
    } else {
        const isSuccess = false;
        yield put(createRoomResult(res, isSuccess));
    }
}

function* postGroupRoomSaga(props: any) {
    console.log('props.payload', props.payload);
    const formData = new FormData();
    formData.append('title', props.payload.title);
    formData.append(`mediaItem`, props.payload.mediaItem.file);

    props.payload.userIds.forEach((item: any, index: number) => {
        formData.append(`userIds`, item);
    });
    const res: ResponseResult = yield call(postGroupRoomApi, { formData });
    if (res.status === 200) {
        yield put(createGroupRoomResult(res.data));
        yield put(getRoom());
    } else {
        const isSuccess = false;
        yield put(createGroupRoomResult(res, isSuccess));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(types.GET_ROOM, getRoomSaga)]);
    yield all([takeEvery(types.POST_ROOM, postRoomSaga)]);
    yield all([takeEvery(types.POST_GROUP_ROOM, postGroupRoomSaga)]);
}
