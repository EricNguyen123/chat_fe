
import { all, call, put, takeEvery } from "redux-saga/effects";
import { ResponseResult } from "../../types/redux";
import {
  uploadFileResult,
  uploadAvatarResult,
  getImageResult,
} from "./actions";
import {
  uploadFileApi,
  uploadAvatarApi,
  getImageApi,
} from "./api";
import types from "./type";

function* uploadFileSaga(props: any) {
  const data = JSON.parse(localStorage.data);
  const file = props.payload;
  const formData = new FormData();
  formData.append('media', file);
  const res: ResponseResult = yield call(uploadFileApi,{ ...data, formData});
  if (res.status === 200) {
    yield put(uploadFileResult(res.data));
  } else {
    const isSuccess = false;
    yield put(uploadFileResult(res, isSuccess));
  }
}

function* getImageSaga(props: any) {
  const data = JSON.parse(localStorage.data);
  const res: ResponseResult = yield call(getImageApi,{...data, avatar: props.payload});
  if (res.status === 200) {
    yield put(getImageResult(res.data));
  } else {
    const isSuccess = false;
    yield put(getImageResult(res, isSuccess));
  }
}

function* uploadAvatarSaga(props: any) {
  const data = JSON.parse(localStorage.data);
  const file = props.payload;
  const formData = new FormData();
  formData.append('avatar', file);
  const res: ResponseResult = yield call(uploadAvatarApi,{ ...data, formData});
  if (res.status === 200) {
    yield put(uploadAvatarResult(res.data));
  } else {
    const isSuccess = false;
    yield put(uploadAvatarResult(res, isSuccess));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(types.UPLOAD_FILE, uploadFileSaga),
    takeEvery(types.UPLOAD_AVATAR, uploadAvatarSaga),
    takeEvery(types.GET_IMAGE, getImageSaga),
  ]);
}
