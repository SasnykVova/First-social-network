import React from 'react';
import s from './MyPost.module.scss';
import Post from './Post/Post';
import { reduxForm, Field, } from 'redux-form';
import { required, maxLengthCreator } from '../../../validators/validators';
import { Textarea } from '../../FormControls/FormControls';

const maxLength10 = maxLengthCreator(300);


const MyPost = React.memo( props => {
    console.log("MyPost");
    let postElement = props.state.postData.map((p, index) => <Post key={index} message={p.message} likeCounts={p.likeCounts}></Post>);

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.MyPost}>
            <div className={s.MyPost__wrapper}>
                <div className={s.MyPost__inputWrapper}>
                    <h3 className={s.MyPost__title}>My posts</h3>
                    <div>
                        <AddPostFormRedux onSubmit={addNewPost} />
                    </div>
                </div>
                <div className={s.MyPost__postsWrapper}>
                    <div className={s.MyPost__posts}>
                        {postElement}
                    </div>
                </div>
            </div>
        </div>
    );
} )

const MyPostForm = (props) => {
    return (
        <div>
            <form className={s.MyPost__inputPostWrapper} onSubmit={props.handleSubmit}>
                <div className={s.MyPost__wrapperTextarea}>
                    <Field component={Textarea} placeholder="Post message" name="newPostText" validate={[required, maxLength10]} className={s.MyPost__textarea} />
                </div>
                <div className={s.MyPost__wrapperButton}>
                    <button className={s.MyPost__button}>Add post</button>
                </div>
            </form>
        </div>
    )
}

const AddPostFormRedux = reduxForm({ form: "addPostForm" })(MyPostForm);

export default MyPost;