
import { all, call, put, takeEvery } from "redux-saga/effects";
import { ResponseResult } from "../../types/redux";
import {
  getReactResult,
  createReactResult,
  deleteReactResult,
} from "./actions";
import {
  getReactApi,
  postReactApi,
  deleteReactApi,
} from "./api";
import types from "./type";
import { getPosts } from "../posts/actions";

function* getReactSaga(props: any) {
  const res: ResponseResult = yield call(getReactApi, props.payload);
  if (res.status === 200) {
    yield put(getReactResult(res.data));
  } else {
    const isSuccess = false;
    yield put(getReactResult(res, isSuccess));
  }
}

function* postReactSaga(props: any) {
  const res: ResponseResult = yield call(postReactApi, props.payload);
  if (res.status === 200) {
    yield put(createReactResult(res.data));
    yield put(getPosts())
  } else {
    const isSuccess = false; 
    yield put(createReactResult(res, isSuccess));
  }
}

function* deleteReactSaga(props: any) {
  const res: ResponseResult = yield call(deleteReactApi, props.payload);
  if (res.status === 200) {
    yield put(deleteReactResult(res.data));
    yield put(getPosts())
  } else {
    const isSuccess = false;
    yield put(deleteReactResult(res, isSuccess));
  }
}


export default function* rootSaga() {
  yield all([
    takeEvery(types.GET, getReactSaga),
    takeEvery(types.POST, postReactSaga),
    takeEvery(types.DELETE, deleteReactSaga),
  ]);
}
