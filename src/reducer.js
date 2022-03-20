import { combineReducers } from 'redux'

import getBlogPosts from './reducer/getBlogPostsReducer'
import getBlogPostById from './reducer/getBlogPostByIdReducer'
import getComments from './reducer/getCommentsReducer'

export default combineReducers({
    getBlogPosts,
getBlogPostById,
getComments,
})