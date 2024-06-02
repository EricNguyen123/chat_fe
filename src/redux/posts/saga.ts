
import { all, call, put, takeEvery } from "redux-saga/effects";
import { ResponseResult } from "../../types/redux";
import {
  getPostResult,
  getPostsResult,
  postPostResult,
  updatePostResult,
  deletePostResult,
  getUserPostsResult
} from "./actions";
import {
  getPostApi,
  getPostsApi,
  postPostsApi,
  updatePostsApi,
  deletePostsApi,
  getUserPostsApi,
} from "./api";
import types from "./type";

function* getPostSaga(props: any) {
  const res: ResponseResult = yield call(getPostApi, props.payload);
  if (res.status === 200) {
    yield put(getPostResult(res.data));
  } else {
    const isSuccess = false;
    yield put(getPostResult(res, isSuccess));
  }
}

function* getPostsSaga(props: any) {
  const res: ResponseResult = yield call(getPostsApi);
  if (res.status === 200) {
    yield put(getPostsResult(res.data));
  } else {
    const isSuccess = false;
    yield put(getPostsResult(res, isSuccess));
  }
}

function* getUserPostsSaga(props: any) {
  const res: ResponseResult = yield call(getUserPostsApi, { id: props.payload.id});
  if (res.status === 200) {
    yield put(getUserPostsResult(res.data));
  } else {
    const isSuccess = false;
    yield put(getUserPostsResult(res, isSuccess));
  }
}

function* postPostSaga(props: any) {
  const formData = new FormData();
  formData.append('body', props.payload.body);
  formData.append('status', props.payload.status);
  formData.append('userId', props.payload.userId);
  if (props.payload.parentId) {
    formData.append('parentId', props.payload.parentId);
  }
  props.payload.mediaItems.forEach((item: any, index: number) => {
    formData.append(`mediaItems`, item.file)
  });
  const res: ResponseResult = yield call(postPostsApi, { formData });
  if (res.status === 200) {
    const resGet: ResponseResult = yield call(getPostsApi);
    yield put(postPostResult(res.data));
    yield put(getPostsResult(resGet.data));
  } else {
    const isSuccess = false;
    yield put(postPostResult(res, isSuccess));
  }
}

function* updatePostSaga(props: any) {
  const formData = new FormData();
  formData.append('body', props.payload.body);
  formData.append('status', props.payload.status);
  formData.append('userId', props.payload.userId);
  if (props.payload.parentId) {
    formData.append('parentId', props.payload.parentId);
  }
  props.payload.mediaItems.forEach((item: any) => {
    if (!item.file) {
      formData.append('mediaItems', JSON.stringify(item));
    }
  });

  props.payload.mediaItems.forEach((item: any) => {
    if (item.file) {
      formData.append('mediaItems', item.file);
    }
  });
  const res: ResponseResult = yield call(updatePostsApi, { postId: props.payload.id, formData });
      
  if (res.status === 200) {
    // const resGet: ResponseResult = yield call(getPostsApi);
    yield put(updatePostResult(res.data));
    // yield put(getPostsResult(resGet.data));
  } else {
    const isSuccess = false;
    yield put(updatePostResult(res, isSuccess));
  }
}

function* deletePostsSaga(props: any) {
  const res: ResponseResult = yield call(deletePostsApi, { postId: props.payload.id });
  if (res.status === 200) {
    const resGet: ResponseResult = yield call(getPostsApi);
    yield put(deletePostResult(res.data));
    yield put(getPostsResult(resGet.data));
  } else {
    const isSuccess = false;
    yield put(deletePostResult(res, isSuccess));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(types.GET_POST, getPostSaga),
    takeEvery(types.GET_POSTS, getPostsSaga),
    takeEvery(types.POST_POST, postPostSaga),
    takeEvery(types.UPDATE_POST, updatePostSaga),
    takeEvery(types.DELETE_POST, deletePostsSaga),
    takeEvery(types.GET_USER_POSTS, getUserPostsSaga),
  ]);
}
