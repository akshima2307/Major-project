import axios from 'axios';
import { POST_DETAILS_FAIL, POST_DETAILS_REQUEST, POST_DETAILS_SUCESS, POST_LIST_FAIL, POST_LIST_REQUEST, POST_LIST_SUCESS,POST_LIKE_ADD,POST_LIKE_REMOVE } from "../constants/postConstants"


export const listPosts = () => async(dispatch) => {
    try{
        dispatch({type: POST_LIST_REQUEST})

        const { data } = await axios.get('/api/posts')

        dispatch({
            type: POST_LIST_SUCESS,
            payload: data
        })

    }catch(error){
        dispatch({
            type: POST_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const listPostDetails = (id) => async(dispatch) => {
    try{
        dispatch({type: POST_DETAILS_REQUEST})

        const { data } = await axios.get(`/api/posts/${id}`)

        dispatch({
            type: POST_DETAILS_SUCESS,
            payload: data
        })

    }catch(error){
        dispatch({
            type: POST_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const likePost = (id) => async(dispatch, getState) => {
    const {data} = await axios.get(`/api/posts/${id}`)

    dispatch({
        type: POST_LIKE_ADD,
        payload: {
            post: data._id,
            name: data.title,
            image: data.img,
            description: data.description,
            likes: data.likes+1,
            views: data.views
        }
    })

    localStorage.setItem('likeItems', JSON.stringify(getState().like.likeItems))
}

export const removeLike = (id) => (dispatch,getState) => {
    dispatch({
        type: POST_LIKE_REMOVE,
        payload: id
    })

    localStorage.setItem('likeItems', JSON.stringify(getState().like.likeItems))
}

