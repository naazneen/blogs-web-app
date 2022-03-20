
import axios from 'axios'

export const getCommentsApi = async (params) => {

    const response = await axios({
        method: 'get',
        url: `https://jsonplaceholder.typicode.com/comments/?postId=${params.id}`,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

    return response
}

export default getCommentsApi