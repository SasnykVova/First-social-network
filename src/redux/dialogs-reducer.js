const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsData: [
        { id: "1", name: "Vlad" },
        { id: "2", name: "Vasyl" },
        { id: "3", name: "Tamara" },
        { id: "4", name: "Diana" },
        { id: "5", name: "Eugen" },
        { id: "6", name: "Daria" },
    ],
    messageData: [
        { id: "1", message: "Hi" },
        { id: "2", message: "Hello!" },
        { id: "3", message: "How are you ?" },
        { id: "4", message: "I want to talk with him" },
        { id: "5", message: "I don't know" },
    ],
    newMessageBody: "",
    avatarData: [
        { src: "https://img.freepik.com/premium-vector/young-man-avatar-character-vector-illustration-design_24877-18516.jpg?w=2000" },
        { src: "https://as2.ftcdn.net/v2/jpg/02/23/50/73/1000_F_223507324_jKl7xbsaEdUjGr42WzQeSazKRighVDU4.jpg" },
        { src: "https://img.freepik.com/premium-vector/portrait-caucasian-woman-avatar-female-person-vector-icon-adult-flat-style-headshot_605517-26.jpg?w=2000" },
        { src: "https://as2.ftcdn.net/v2/jpg/02/79/66/93/1000_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg" },
        { src: "https://image.shutterstock.com/image-vector/male-avatar-icon-portrait-handsome-260nw-604160576.jpg" },
        { src: "https://img.freepik.com/premium-vector/avatar-icon-chinese-woman-premium-vector_181720-16.jpg?w=2000" },
    ],
};
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body,
            }
        case SEND_MESSAGE: 
        let body = state.newMessageBody;
        return {
            ...state,
            messageData: [ ...state.messageData , { id: "6", message: body }],
            newMessageBody: '',
        }
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (messageText) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: messageText
    }
};

export default dialogsReducer;
