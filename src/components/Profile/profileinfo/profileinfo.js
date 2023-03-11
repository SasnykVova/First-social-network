import s from './profileinfo.module.scss';
import ProfileStatusWithHooks from './profileStatusWithHooks';
import userAvataLarge from "../../../assets/images/userAvataLarge.png";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <div className={s.profilePreloader}><img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="preloader" /></div>
    }
    console.log(props.profile.photos.large);
    return (
        <div>
            <div className={s.aboutuser}>
                <div className={s.avatardiv}>
                    <div className={s.avatardiv__wrapper}>
                        <img className={s.avatardiv__avatar} src={props.profile.photos.large ? props.profile.photos.large : userAvataLarge} alt="Avatar"></img>
                        <div className={s.avatardiv__name}>{props.profile.fullName}</div>
                    </div>
                </div>
                <div className={s.blockuserContacts}>
                    <div className={s.blockuserContacts__statusBlock}>
                        <div className={s.blockuserContacts__statusWrapper}>
                            <div className={s.blockuserContacts__statusTitle}>Status</div>
                            <div><ProfileStatusWithHooks className={s.blockuserContacts__status} status={props.status} updateStatus={props.updateStatus} /></div>
                        </div>
                    </div>
                    <div className={s.blockuserContacts__live}>
                        <div className={s.blockuserContacts__street}>
                            <h5 className={s.blockuserContacts__titleh5}>Street</h5>
                            <div>Shevchenka</div>
                        </div>
                        <div className={s.blockuserContacts__number}>
                            <h5 className={s.blockuserContacts__titleh5}>Number</h5>
                            <div>0990963186</div>
                        </div>
                    </div>
                    <div className={s.blockuserContacts__social}>
                        <div>
                            <div>Facebook</div>
                            <div>{props.profile.facebook ? props.profile.facebook : "---"}</div>
                        </div>
                        <div>
                            <div>Instagram</div>
                            <div>---</div>
                        </div>
                        <div>
                            <div>Twitter</div>
                            <div>---</div>
                        </div>
                        <div>
                            <div>Website</div>
                            <div>---</div>
                        </div>
                        <div>
                            <div>Youtube</div>
                            <div>---</div>
                        </div>
                        <div>
                            <div>Vk</div>
                            <div>---</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ProfileInfo;