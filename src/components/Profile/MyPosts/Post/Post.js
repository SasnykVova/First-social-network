import s from './Post.module.scss';


const Post = (props) => {
    return (
        <div className={s.Post}>
            <div className={s.Post__wrapperUser}>
                <div>
                    <img className={s.Post__img} src="https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg"
                        alt="Avatar"></img>
                </div>
                <div>
                    <p className={s.Post__likeNumber}>Like {props.likeCounts}</p>
                </div>
            </div>
            <div className={s.Post__wrapperLike}>
                <p className={s.Post__text}>{props.message}</p>
            </div>
        </div>
    );
}

export default Post;