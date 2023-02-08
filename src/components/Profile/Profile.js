import ProfileInfo from './profileinfo/profileinfo';
import s from './Profile.module.scss';
import MyPostContainer from './MyPosts/MyPostContainer';




const Profile = (props) => {
    return (
        <div className={s.Profile}>
            <div className={s.Profile__image}>
                <img src="https://funart.pro/uploads/posts/2021-04/thumbs/1618518158_12-funart_pro-p-oboi-fon-sinii-fon-bez-nichego-12.jpg" alt="background"></img>
            </div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostContainer/>
        </div>
    );
}
export default Profile;

