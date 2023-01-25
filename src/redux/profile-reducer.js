import { usersAPI } from './../api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';



let initialState = {
    postData: [
        { id: "3", message: "Hello , i learn react.", likeCounts: 29 },
        { id: "1", message: "Hi, how are you ?", likeCounts: 24 },
        { id: "2", message: "It's my first post.", likeCounts: 11 },
    ],
    newPostText: "",
    profile: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: "5",
                message: state.newPostText,
                likeCounts: 0,
            }
            let stateCopy = { ...state }
            stateCopy.postData = [...state.postData]
            stateCopy.postData.unshift(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = { ...state }
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {...state,
            profile: action.profile}
        }
        default:{
            let stateCopy = { ...state }
            return stateCopy
        }
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
};
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE , profile});

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        });
    }
};

export default profileReducer;