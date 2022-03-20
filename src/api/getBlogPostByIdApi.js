
import axios from 'axios'

export const getBlogPostByIdApi = async (params) => {
    const response = await axios({
        method: 'get',
        url: `https://jsonplaceholder.typicode.com/posts/${params.id}`,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

    return response
}

export default getBlogPostByIdApi