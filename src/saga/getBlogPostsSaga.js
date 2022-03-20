import { call, put, takeLatest } from 'redux-saga/effects'

import {
    GET_BLOG_POSTS,
    getBlogPostsSuccess,
    getBlogPostsFail
} from '../action/getBlogPostsAction'

import getBlogPostsApi from '../api/getBlogPostsApi'

export function* getBlogPostsSaga(action) {
    try {
        const response = yield call(() => getBlogPostsApi(action.params))
        yield put(getBlogPostsSuccess(response, action))
    } catch (e) {
        yield put(getBlogPostsFail(e.response, action))
    }
}

export default function* MySaga() {
    yield takeLatest(GET_BLOG_POSTS, getBlogPostsSaga)
}