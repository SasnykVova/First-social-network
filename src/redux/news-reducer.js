const TEXT_OF_NEW = 'TEXT_OF_NEW';
const ADD_NEW = 'ADD_NEW';

let initialState = {
    newData: [
        { id: "1", newText: "Russia started a war with Ukraine." },
        { id: "2", newText: "I started learning React." },
    ],
    newTextOfNew: "",
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEXT_OF_NEW:
            return {
                ...state,
                newTextOfNew: action.text,
            }
        case ADD_NEW:
            let text = state.newTextOfNew;
            return {
                ...state,
                newData: [{ id: "3", newText: text }, ...state.newData],
                newTextOfNew: "",
            }
        default:
            return state
    }
};

export const addNewCreator = () => ({ type: ADD_NEW });
export const textOfNewCreator = (text) => {
    return {
        type: TEXT_OF_NEW, text: text
    }
};
export default newsReducer;