
import { all, call, put, takeEvery } from "redux-saga/effects";
import { ResponseResult } from "../../types/redux";
import {
  getUserResult,
  getOtherUserResult,
  getUsersResult,
} from "./actions";
import {
  getUserApi,
  getOtherUserApi,
  getUsersApi,
} from "./api";
import types from "./type";

function* getUserSaga() {
  const data = JSON.parse(localStorage.data);
  const res: ResponseResult = yield call(getUserApi, data);
  if (res.status === 200) {
    yield put(getUserResult(res.data));
  } else {
    const isSuccess = false;
    yield put(getUserResult(res, isSuccess));
  }
}

function* getUsersSaga() {
  const data = JSON.parse(localStorage.data);
  const res: ResponseResult = yield call(getUsersApi, data);
  if (res.status === 200) {
    yield put(getUsersResult(res.data));
  } else {
    const isSuccess = false;
    yield put(getUsersResult(res, isSuccess));
  }
}

function* getOtherUserSaga(props: any) {
  const res: ResponseResult = yield call(getOtherUserApi, props.payload);
  if (res.status === 200) {
    yield put(getOtherUserResult(res.data));
  } else {
    const isSuccess = false;
    yield put(getOtherUserResult(res, isSuccess));
  }
}


export default function* rootSaga() {
  yield all([
    takeEvery(types.GET_USER, getUserSaga),
    takeEvery(types.GET_OTHER_USER, getOtherUserSaga),
    takeEvery(types.GET_USERS, getUsersSaga),
  ]);
}
