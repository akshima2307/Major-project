import { POST_DETAILS_FAIL, POST_DETAILS_REQUEST, POST_DETAILS_SUCESS, POST_LIST_FAIL, POST_LIST_REQUEST, POST_LIST_SUCESS,POST_LIKE_ADD,POST_LIKE_REMOVE } from "../constants/postConstants"

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

