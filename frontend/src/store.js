import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { postListReducer, postDetailsReducer, likeReducer } from "./reducers/postReducers";

const reducer = combineReducers({
  postList: postListReducer,
  postDetails: postDetailsReducer,
  like: likeReducer
});

const likeItemsFromStorage = localStorage.getItem('likeItems') ? JSON.parse(localStorage.getItem('likeItems')) : [] 

const initialState = {
  like: {
    likeItems: likeItemsFromStorage
  }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;