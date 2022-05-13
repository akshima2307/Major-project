import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { postListReducer, postDetailsReducer, likeReducer } from "./reducers/postReducers";
import { userLoginReducer, userRegisterReducer,userDetailsReducer, userUpdateProfileReducer,userListReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  postList: postListReducer,
  postDetails: postDetailsReducer,
  like: likeReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList:userListReducer
});

const likeItemsFromStorage = localStorage.getItem('likeItems') ? JSON.parse(localStorage.getItem('likeItems')) : [] 
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null 

const initialState = {
  like: {
    likeItems: likeItemsFromStorage,
  },
  userLogin: {
    userInfo: userInfoFromStorage
  }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;