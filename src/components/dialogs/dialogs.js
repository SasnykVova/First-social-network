import s from './dialogs.module.scss';
import Dialog from './dialog/dialog';
import Message from './message/message';
import Avatar from './avatar/avatar';
import { Navigate } from 'react-router-dom';




const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map(d => <Dialog name={d.name} key={d.id} id={d.id}></Dialog>);
    let messagesElements = props.state.messageData.map(m => <Message message={m.message} key={m.id}></Message>);
    let avatarElements = props.state.avatarData.map(a => <Avatar src={a.src} key={a.id}></Avatar>);
    let newMessageBody = props.state.newMessageBody;

    let addMessage = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.newElementChange(body);
    }

    if (!props.auth.isAuth) return <Navigate to={"/login"}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__wrapperAvata}>
                {avatarElements}
            </div>
            <div className={s.dialogs__user}>
                {dialogsElements}
            </div>
            <div className={s.dialogs__messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea onChange={onNewMessageChange} value={newMessageBody} placeholder='Enter your message'></textarea></div>
                    <div><button onClick={addMessage}>Send message</button></div>
                </div>
            </div>
        </div>
    );
}


export default Dialogs;
