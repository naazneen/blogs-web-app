export const GET_COMMENTS = 'GET_COMMENTS'
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS'
export const GET_COMMENTS_FAIL = 'GET_COMMENTS_FAIL'
export const GET_COMMENTS_RESET_STATE = 'GET_COMMENTS_RESET_STATE'

export const getComments = (params) => {
    return { type: GET_COMMENTS, params }
}

export const getCommentsSuccess = (response) => {
    return { type: GET_COMMENTS_SUCCESS, response }
}

export const getCommentsFail = (response) => {
    return { type: GET_COMMENTS_FAIL, response }
}

export const getCommentsResetState = () => {
    return { type: GET_COMMENTS_RESET_STATE }
}
