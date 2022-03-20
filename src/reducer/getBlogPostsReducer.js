import {
    GET_BLOG_POSTS,
    GET_BLOG_POSTS_SUCCESS,
    GET_BLOG_POSTS_FAIL,
    GET_BLOG_POSTS_RESET_STATE,
} from '../action/getBlogPostsAction'


const initialState = {
    apiState: "", // loading, success, error
    message: "",
    blogs: [],
    params: "",
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_BLOG_POSTS:
            return {
                ...state,
                apiState: "loading",
                params: action.params,
            }

        case GET_BLOG_POSTS_SUCCESS:
            return {
                ...state,
                apiState: "success",
                blogs: action.response.data
            }

        case GET_BLOG_POSTS_FAIL:
            return {
                ...state,
                apiState: "error",
                message: action.response && action.response.data && action.response.data.message,
            }

        case GET_BLOG_POSTS_RESET_STATE:
            return initialState

        default:
            return state
    }
}
