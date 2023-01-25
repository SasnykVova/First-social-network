// import dialogsReducer from "./dialogs-reducer";
// import newsReducer from "./news-reducer";
// import profileReducer from "./profile-reducer";


// let store = {
//     _state: {
//         profilePage: {
//             postData: [
//                 { id: "3", message: "Hello , i learn react.", likeCounts: 29 },
//                 { id: "1", message: "Hi, how are you ?", likeCounts: 24 },
//                 { id: "2", message: "It's my first post.", likeCounts: 11 },
//             ],
//             newPostText: "",
//         },
//         messagePage: {
//             dialogsData: [
//                 { id: "1", name: "Vlad" },
//                 { id: "2", name: "Vasyl" },
//                 { id: "3", name: "Tamara" },
//                 { id: "4", name: "Diana" },
//                 { id: "5", name: "Eugen" },
//                 { id: "6", name: "Daria" },
//             ],
//             messageData: [
//                 { id: "1", message: "Hi" },
//                 { id: "2", message: "Hello!" },
//                 { id: "3", message: "How are you ?" },
//                 { id: "4", message: "I want to talk with him" },
//                 { id: "5", message: "I don't know" },
//             ],
//             newMessageBody: "",
//             avatarData: [
//                 { src: "https://img.freepik.com/premium-vector/young-man-avatar-character-vector-illustration-design_24877-18516.jpg?w=2000" },
//                 { src: "https://as2.ftcdn.net/v2/jpg/02/23/50/73/1000_F_223507324_jKl7xbsaEdUjGr42WzQeSazKRighVDU4.jpg" },
//                 { src: "https://img.freepik.com/premium-vector/portrait-caucasian-woman-avatar-female-person-vector-icon-adult-flat-style-headshot_605517-26.jpg?w=2000" },
//                 { src: "https://as2.ftcdn.net/v2/jpg/02/79/66/93/1000_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg" },
//                 { src: "https://image.shutterstock.com/image-vector/male-avatar-icon-portrait-handsome-260nw-604160576.jpg" },
//                 { src: "https://img.freepik.com/premium-vector/avatar-icon-chinese-woman-premium-vector_181720-16.jpg?w=2000" },
//             ],
//         },
//         newPage: {
//             newData: [
//                 { id: "1", newText: "Russia started a war with Ukraine." },
//                 { id: "2", newText: "I started learning React." },
//             ],
//             newTextOfNew: "",
//         },
//     },
//     getState() {
//         return this._state;
//     },
//     _callSubscriber() {
//         console.log("State changed");
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//     dispatch(action) {

//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.messagePage = dialogsReducer(this._state.messagePage, action);
//         this._state.newPage = newsReducer(this._state.newPage, action);

//         this._callSubscriber(this._state);
//     },
// };


// export default store;
