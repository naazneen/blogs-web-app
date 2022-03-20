import {
    GET_BLOG_POST_BY_ID,
    GET_BLOG_POST_BY_ID_SUCCESS,
    GET_BLOG_POST_BY_ID_FAIL,
    GET_BLOG_POST_BY_ID_RESET_STATE,
} from '../action/getBlogPostByIdAction'


const initialState = {
    apiState: "", // loading, success, error
    message: "",
    blog: {},
    params: "",
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_BLOG_POST_BY_ID:
            return {
                ...state,
                apiState: "loading",
                params: action.params,
            }

        case GET_BLOG_POST_BY_ID_SUCCESS:
            return {
                ...state,
                apiState: "success",
                blog: action.response.data
            }

        case GET_BLOG_POST_BY_ID_FAIL:
            return {
                ...state,
                apiState: "error",
                message: action.response && action.response.data && action.response.data.message,
            }

        case GET_BLOG_POST_BY_ID_RESET_STATE:
            return initialState

        default:
            return state
    }
}
