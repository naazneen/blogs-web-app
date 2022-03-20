import { call, put, takeLatest } from 'redux-saga/effects'

import {
    GET_COMMENTS,
    getCommentsSuccess,
    getCommentsFail
} from '../action/getCommentsAction'

import getCommentsApi from '../api/getCommentsApi'

export function* getCommentsSaga(action) {
    try {
        const response = yield call(() => getCommentsApi(action.params))
        yield put(getCommentsSuccess(response, action))
    } catch (e) {
        yield put(getCommentsFail(e.response, action))
    }
}

export default function* MySaga() {
    yield takeLatest(GET_COMMENTS, getCommentsSaga)
}