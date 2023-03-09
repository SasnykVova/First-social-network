import { profileAPI, usersAPI } from './../api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';



let initialState = {
    postData: [
        { id: "3", message: "Hello , i learn react.", likeCounts: 29 },
        { id: "1", message: "Hi, how are you ?", likeCounts: 24 },
        { id: "2", message: "It's my first post.", likeCounts: 11 },
    ],
    newPostText: "",
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: "5",
                message: action.newPostText,
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
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default: {
            let stateCopy = { ...state }
            return stateCopy
        }
    }
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST , newPostText });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUserProfile = (userId) => async (dispatch) => { 
        let response = await usersAPI.getProfile(userId)
            dispatch(setUserProfile(response.data));
    }

export const getStatus = (userId) => async (dispatch) => {
        let response = await profileAPI.getStatus(userId)
            dispatch(setStatus(response.data));
    }

export const updateStatus = (status) => async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
    }


export default profileReducer;