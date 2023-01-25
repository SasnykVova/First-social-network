import React from 'react';
import s from './MyPost.module.scss';
import Post from './Post/Post';

let newPostElement = React.createRef();

const MyPost = (props) => {
    let postElement = props.state.postData.map((p, index) => <Post key={index} message={p.message} likeCounts={p.likeCounts}></Post>);
    let onAddPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.MyPost}>
            <h3 className={s.MyPost__title}>My posts</h3>
            <div>
                <div className={s.MyPost__wrapperTextarea}>
                    <textarea onChange={onPostChange} ref={newPostElement} placeholder='Enter the text' value={props.state.newPostText} className={s.MyPost__textarea} />
                </div>
                <div className={s.MyPost__wrapperButton}>
                    <button onClick={onAddPost} className={s.MyPost__button}>Add post</button>
                </div>
            </div>
            <div className={s.MyPost__posts}>
                {postElement}
            </div>
        </div>
    );
}


export default MyPost;