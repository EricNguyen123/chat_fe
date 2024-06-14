import { all, call, put, takeEvery } from 'redux-saga/effects';
import { ResponseResult } from '../../types/redux';
import { getMessagesResult, createMessagesResult, deleteMessagesResult, voiceMessagesResult } from './actions';
import { getMessagesApi, postMessagesApi, deleteMessagesApi, voiceMessagesApi } from './api';
import types from './type';

function* getMessagesSaga(props: any) {
    const res: ResponseResult = yield call(getMessagesApi, { roomId: props.payload.roomId });
    if (res.status === 200) {
        yield put(getMessagesResult(res.data));
    } else {
        const isSuccess = false;
        yield put(getMessagesResult(res, isSuccess));
    }
}

function* postMessagesSaga(props: any) {
    const formData = new FormData();
    formData.append('message', props.payload.message);
    formData.append('roomId', props.payload.roomId);
    formData.append('userId', props.payload.userId);
    props.payload.mediaItems.forEach((item: any, index: number) => {
        formData.append(`mediaItems`, item.file);
    });
    const res: ResponseResult = yield call(postMessagesApi, { formData });
    if (res.status === 200) {
        yield put(createMessagesResult(res.data));
    } else {
        const isSuccess = false;
        yield put(createMessagesResult(res, isSuccess));
    }
}

function* deleteMessagesSaga(props: any) {
    const res: ResponseResult = yield call(deleteMessagesApi, { id: props.payload.id });
    if (res.status === 200) {
        yield put(deleteMessagesResult(res.data));
    } else {
        const isSuccess = false;
        yield put(deleteMessagesResult(res, isSuccess));
    }
}

function* voiceMessagesSaga(props: any) {
    const formData = new FormData();
    formData.append('roomId', props.payload.roomId);
    formData.append('userId', props.payload.userId);
    formData.append('audio', props.payload.recordedBlob, 'recording.wav');
    const res: ResponseResult = yield call(voiceMessagesApi, { formData });
    if (res.status === 200) {
        yield put(voiceMessagesResult(res.data));
    } else {
        const isSuccess = false;
        yield put(voiceMessagesResult(res, isSuccess));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(types.GET_MESSAGES, getMessagesSaga)]);
    yield all([takeEvery(types.POST_MESSAGES, postMessagesSaga)]);
    yield all([takeEvery(types.DELETE_MESSAGES, deleteMessagesSaga)]);
    yield all([takeEvery(types.VOICE_MESSAGES, voiceMessagesSaga)]);
}
