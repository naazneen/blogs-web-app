
import axios from 'axios'

export const getBlogPostsApi = async (params) => {

    const response = await axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/posts',
        params: params,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

    return response
}

export default getBlogPostsApi