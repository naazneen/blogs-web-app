export const GET_BLOG_POST_BY_ID = 'GET_BLOG_POST_BY_ID'
export const GET_BLOG_POST_BY_ID_SUCCESS = 'GET_BLOG_POST_BY_ID_SUCCESS'
export const GET_BLOG_POST_BY_ID_FAIL = 'GET_BLOG_POST_BY_ID_FAIL'
export const GET_BLOG_POST_BY_ID_RESET_STATE = 'GET_BLOG_POST_BY_ID_RESET_STATE'

export const getBlogPostById = (params) => {
    return { type: GET_BLOG_POST_BY_ID, params }
}

export const getBlogPostByIdSuccess = (response) => {
    return { type: GET_BLOG_POST_BY_ID_SUCCESS, response }
}

export const getBlogPostByIdFail = (response) => {
    return { type: GET_BLOG_POST_BY_ID_FAIL, response }
}

export const getBlogPostByIdResetState = () => {
    return { type: GET_BLOG_POST_BY_ID_RESET_STATE }
}
