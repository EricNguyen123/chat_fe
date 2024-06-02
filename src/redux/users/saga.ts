
import { all, call, put, takeEvery } from "redux-saga/effects";
import { ResponseResult } from "../../types/redux";
import {
  getUserResult,
  getOtherUserResult,
  getUsersResult,
  followingResult,
  unfollowResult,
} from "./actions";
import {
  getUserApi,
  getOtherUserApi,
  getUsersApi,
  followingApi,
  unfollowApi,
} from "./api";
import types from "./type";
import { getUserPostsApi } from "../posts/api";
import { getUserPostsResult } from "../posts/actions";

function* getUserSaga() {
  const res: ResponseResult = yield call(getUserApi);
  if (res.status === 200) {
    yield put(getUserResult(res.data));
  } else {
    const isSuccess = false;
    yield put(getUserResult(res, isSuccess));
  }
}

function* getUsersSaga() {
  const res: ResponseResult = yield call(getUsersApi);
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

function* followSaga(props: any) {
  const { id, handleTick } = props.payload;
  const res: ResponseResult = yield call(followingApi, { id });
  if (res.status === 200) {
    const resPosts: ResponseResult = yield call(getUserPostsApi, { id });
    yield put(followingResult(res.data));
    yield put(getUserPostsResult(resPosts.data));
    handleTick && handleTick();
  } else {
    const isSuccess = false;
    yield put(followingResult(res, isSuccess));
  }
}

function* unfollowSaga(props: any) {
  const { id, handleTick } = props.payload;
  const res: ResponseResult = yield call(unfollowApi, { id });
  if (res.status === 200) {
    const resPosts: ResponseResult = yield call(getUserPostsApi, { id });
    yield put(unfollowResult(res.data));
    yield put(getUserPostsResult(resPosts.data))
    handleTick && handleTick();
  } else {
    const isSuccess = false;
    yield put(unfollowResult(res, isSuccess));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(types.GET_USER, getUserSaga),
    takeEvery(types.GET_OTHER_USER, getOtherUserSaga),
    takeEvery(types.GET_USERS, getUsersSaga),
    takeEvery(types.FOLLOWING, followSaga),
    takeEvery(types.UNFOLLOW, unfollowSaga),
  ]);
}
