import { call, put, takeLatest } from 'redux-saga/effects'

import {
    GET_BLOG_POST_BY_ID,
    getBlogPostByIdSuccess,
    getBlogPostByIdFail
} from '../action/getBlogPostByIdAction'

import getBlogPostByIdApi from '../api/getBlogPostByIdApi'

export function* getBlogPostByIdSaga(action) {
    try {
        const response = yield call(() => getBlogPostByIdApi(action.params))
        yield put(getBlogPostByIdSuccess(response, action))
    } catch (e) {
        yield put(getBlogPostByIdFail(e.response, action))
    }
}

export default function* MySaga() {
    yield takeLatest(GET_BLOG_POST_BY_ID, getBlogPostByIdSaga)
}