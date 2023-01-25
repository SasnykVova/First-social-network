import { NavLink } from 'react-router-dom';
import s from './dialog.module.scss';


const Dialog = (props) => {
    return (
        <div className={s.userName}>
            <NavLink className={s.userLink} to={/dialogs/ + props.id}>{props.name}</NavLink>
        </div>
    );
}


export default Dialog;