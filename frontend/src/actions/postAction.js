import axios from 'axios';
import { POST_DETAILS_FAIL, POST_DETAILS_REQUEST, POST_DETAILS_SUCESS, POST_LIST_FAIL, POST_LIST_REQUEST, POST_LIST_SUCESS,POST_LIKE_ADD,POST_LIKE_REMOVE, POST_CREATE_REQUEST, POST_CREATE_SUCESS, POST_CREATE_FAIL, POST_UPDATE_REQUEST, POST_UPDATE_SUCESS, POST_UPDATE_FAIL, POST_LIST_OF_USER_REQUEST, POST_LIST_OF_USER_FAIL, POST_LIST_OF_USER_SUCCESS, POST_DELETE_REQUEST, POST_DELETE_SUCESS, POST_DELETE_FAIL } from "../constants/postConstants"


export const listPosts = (keyword = "") => async(dispatch) => {
    try{
        dispatch({type: POST_LIST_REQUEST})

        const { data } = await axios.get(`/api/posts?keyword=${keyword}`)

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

export const createPost = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: POST_CREATE_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(`/api/posts`, {} , config);
      dispatch({
        type: POST_CREATE_SUCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: POST_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
};

export const deletePost = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    await axios.delete(`/api/posts/${id}`, config);
    dispatch({
      type: POST_DELETE_SUCESS,
    });
  } catch (error) {
    dispatch({
      type: POST_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updatePost = (post) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(`/api/posts/${post._id}`, post , config);
    dispatch({
      type: POST_UPDATE_SUCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const listPostsByUser = (id) => async(dispatch,getState) => {
  try{
      dispatch({type: POST_LIST_OF_USER_REQUEST})

      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.get(`/api/posts/user/${id}`, config)

      dispatch({
          type: POST_LIST_OF_USER_SUCCESS,
          payload: data
      })

  }catch(error){
      dispatch({
          type: POST_LIST_OF_USER_FAIL,
          payload: error.response && error.response.data.message ? error.response.data.message : error.message
      })
  }
}



