import {
    GET_BLOG_POSTS,
    GET_BLOG_POSTS_SUCCESS,
    GET_BLOG_POSTS_FAIL,
    GET_BLOG_POSTS_RESET_STATE,
} from '../action/getBlogPostsAction'


const initialState = {
    apiState: "", // loading, success, error
    message: "",
    total_records: 0,
    sales_order: [],
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
                message: action.response.data.message,
                total_records: action.response.data.total_records,
                sales_order: action.response.data.sales_order,
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
