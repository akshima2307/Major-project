import { POST_DETAILS_FAIL, POST_DETAILS_REQUEST, POST_DETAILS_SUCESS, POST_LIST_FAIL, POST_LIST_REQUEST, POST_LIST_SUCESS,POST_LIKE_ADD,POST_LIKE_REMOVE, POST_CREATE_REQUEST, POST_CREATE_SUCESS, POST_CREATE_FAIL, POST_CREATE_RESET, POST_UPDATE_REQUEST, POST_UPDATE_SUCESS, POST_UPDATE_FAIL, POST_UPDATE_RESET, POST_LIST_OF_USER_REQUEST, POST_LIST_OF_USER_SUCCESS, POST_LIST_OF_USER_FAIL, POST_DELETE_REQUEST, POST_DELETE_SUCESS, POST_DELETE_FAIL } from "../constants/postConstants"

export const postListReducer = (state = {posts: []}, action) => {
    switch(action.type){
        case POST_LIST_REQUEST:
            return { loading: true, posts: [] }
        case POST_LIST_SUCESS:
            return { loading: false, posts: action.payload }
        case POST_LIST_FAIL:
            return {loading: false, error: action.payload }
        default:
            return state
    }
}

export const postDetailsReducer = (state = {post: { reviews: [] }}, action) => {
    switch(action.type){
        case POST_DETAILS_REQUEST:
            return { loading: true, ...state }
        case POST_DETAILS_SUCESS:
            return { loading: false, post: action.payload }
        case POST_DETAILS_FAIL:
            return {loading: false, error: action.payload }
        default:
            return state
    }
}   

export const postDeleteReducer = (state = {}, action) => {
    switch(action.type){
        case POST_DELETE_REQUEST:
            return { loading: true }
        case POST_DELETE_SUCESS:
            return { loading: false, success: true }
        case POST_DELETE_FAIL:
            return {loading: false, error: action.payload }
        default:
            return state
    }
}   

export const likeReducer = (state = {likeItems: []}, action) => {
    switch(action.type){
        case POST_LIKE_ADD:
            const item = action.payload 

            const existItem = state.likeItems.find(x => x.post === item.post)
            if(existItem){
                return {
                    ...state,
                    likeItems: state.likeItems.map(x => x.post === existItem.post ? item : x)
                }
            }else{
                return {
                    ...state,
                    likeItems: [...state.likeItems, item]
                }
            }
        case POST_LIKE_REMOVE:
            return {
                ...state,
                likeItems: state.likeItems.filter(x => x.post !== action.payload)
            } 
        default:
            return state
    }
}


export const postCreateReducer = (state = {}, action) => {
    switch(action.type){
        case POST_CREATE_REQUEST:
            return { loading: true, ...state }
        case POST_CREATE_SUCESS:
            return { loading: false,success: true, post: action.payload }
        case POST_CREATE_FAIL:
            return {loading: false, error: action.payload }
        case POST_CREATE_RESET:
            return {}
        default:
            return state
    }
}  

export const postUpdateReducer = (state = {post: {}}, action) => {
    switch(action.type){
        case POST_UPDATE_REQUEST:
            return { loading: true, ...state }
        case POST_UPDATE_SUCESS:
            return { loading: false,success: true, post: action.payload }
        case POST_UPDATE_FAIL:
            return {loading: false, error: action.payload }
        case POST_UPDATE_RESET:
            return {post: {}}
        default:
            return state
    }
} 


export const postListOfUserReducer = (state = {posts: []}, action) => {
    switch(action.type){
        case POST_LIST_OF_USER_REQUEST:
            return { loading: true }
        case POST_LIST_OF_USER_SUCCESS:
            return { loading: false, posts: action.payload }
        case POST_LIST_OF_USER_FAIL:
            return {loading: false, error: action.payload }
        default:
            return state
    }
}