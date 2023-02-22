import { connect } from 'react-redux';
import { addPostActionCreator, } from '../../../redux/profile-reducer';
import MyPost from './MyPost';


let mapStateToProps = (state) => {
    return {
        state:state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

const MyPostContainer = connect (mapStateToProps, mapDispatchToProps) (MyPost);


export default MyPostContainer;