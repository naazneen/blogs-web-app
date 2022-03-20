import {
    GET_COMMENTS,
    GET_COMMENTS_SUCCESS,
    GET_COMMENTS_FAIL,
    GET_COMMENTS_RESET_STATE,
} from '../action/getCommentsAction'


const initialState = {
    apiState: "", // loading, success, error
    message: "",
    blogs: [],
    params: "",
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_COMMENTS:
            return {
                ...state,
                apiState: "loading",
                params: action.params,
            }

        case GET_COMMENTS_SUCCESS:
            return {
                ...state,
                apiState: "success",
                blogs: action.response.data
            }

        case GET_COMMENTS_FAIL:
            return {
                ...state,
                apiState: "error",
                message: action.response && action.response.data && action.response.data.message,
            }

        case GET_COMMENTS_RESET_STATE:
            return initialState

        default:
            return state
    }
}
