import s from './profileinfo.module.scss';
import ProfileStatus from './profileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <div className={s.profilePreloader}><img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="preloader" /></div>
    }
    return (
        <div>
            <div className={s.aboutuser}>
                <div className={s.avatardiv}>
                    <img className={s.avatar} src={props.profile.photos.large} alt="Avatar"></img>
                    <div className={s.blockuser__name}>{props.profile.fullName}</div>
                </div>
                <div className={s.blockuser}>
                    <div className={s.blockuser__status}>Status: <ProfileStatus status={props.status} updateStatus={props.updateStatus}/></div>
                    <div>Street: Shevchenka</div>
                    <div>Number: 0990963186</div>
                </div>
                <div className={s.userContacts}>
                    <div>Facebook: {props.profile.facebook}</div>
                    <div>Instagram: {props.profile.instagram}</div>
                    <div>Twitter:</div>
                    <div>Website:</div>
                    <div>Youtube:</div>
                    <div>Vk:</div>
                </div>
            </div>
        </div>
    );
};


export default ProfileInfo;