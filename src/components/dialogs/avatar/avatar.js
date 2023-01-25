import s from '../../dialogs/dialogs.module.scss';

const Avatar = (props) => {
    return (
        <img className={s.dialogs__userAvatar} src={props.src} alt=""></img>
    )
};


export default Avatar;