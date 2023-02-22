import s from './dialogs.module.scss';
import Dialog from './dialog/dialog';
import Message from './message/message';
import Avatar from './avatar/avatar';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../FormControls/FormControls';
import { maxLengthCreator, required } from '../../validators/validators';

const maxLength50 = maxLengthCreator(50);





const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map(d => <Dialog name={d.name} key={d.id} id={d.id}></Dialog>);
    let messagesElements = props.state.messageData.map(m => <Message message={m.message} key={m.id}></Message>);
    let avatarElements = props.state.avatarData.map(a => <Avatar src={a.src} key={a.id}></Avatar>);
    // let newMessageBody = props.state.newMessageBody;


    // let onNewMessageChange = (e) => {
    //     let body = e.target.value;
    //     props.newElementChange(body);
    // }
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

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
                <AddmessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}

const AddmessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newMessageBody" placeholder="Enter your message" validate={[required , maxLength50]}/>
            </div>
            <div>
                <button >Send message</button>
            </div>
        </form>
    )
}

const AddmessageFormRedux = reduxForm({form: "dialogAddmessageForm"})(AddmessageForm);

export default Dialogs;
