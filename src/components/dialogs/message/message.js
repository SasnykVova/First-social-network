import s from './message.module.scss';



const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}


export default Message;