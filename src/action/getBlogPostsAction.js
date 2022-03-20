export const GET_BLOG_POSTS = 'GET_BLOG_POSTS'
export const GET_BLOG_POSTS_SUCCESS = 'GET_BLOG_POSTS_SUCCESS'
export const GET_BLOG_POSTS_FAIL = 'GET_BLOG_POSTS_FAIL'
export const GET_BLOG_POSTS_RESET_STATE = 'GET_BLOG_POSTS_RESET_STATE'

export const getBlogPosts = (params) => {
    return { type: GET_BLOG_POSTS, params }
}

export const getBlogPostsSuccess = (response) => {
    return { type: GET_BLOG_POSTS_SUCCESS, response }
}

export const getBlogPostsFail = (response) => {
    return { type: GET_BLOG_POSTS_FAIL, response }
}

export const getBlogPostsResetState = () => {
    return { type: GET_BLOG_POSTS_RESET_STATE }
}
