import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import newsReducer from './news-reducer';
import usersReducer from './users-reducer';
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    newPage: newsReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;



export default store;