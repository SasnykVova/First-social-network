import s from './new.module.scss';


const New = (props) => {
    return (
        <div className={s.new}>
            <div className={s.new__wrapper}>
                <div className={s.new__userAvatar}><img src='https://www.pngitem.com/pimgs/m/576-5768840_cartoon-man-png-avatar-transparent-png.png' alt='User-avatar'/></div>
                <div className={s.new__text}>{props.newText}</div>
            </div>
        </div>
    );
}


export default New;