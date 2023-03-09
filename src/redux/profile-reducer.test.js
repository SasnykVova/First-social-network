import profileReducer, { addPostActionCreator } from "./profile-reducer";
import React from "react";

it ('new post should be added', () => {
// 1.Test data
    let action = addPostActionCreator("ADVICE.com");
    let state = {
        postData: [
            { id: "3", message: "Hello , i learn react.", likeCounts: 29 },
            { id: "1", message: "Hi, how are you ?", likeCounts: 24 },
            { id: "2", message: "It's my first post.", likeCounts: 11 },
        ],
        newPostText: "",
        profile: null,
        status: "",
    };
// 2.Action
    let newState = profileReducer(state, action);

//3.Expectation
    expect(newState.postData.length).toBe(5);
})