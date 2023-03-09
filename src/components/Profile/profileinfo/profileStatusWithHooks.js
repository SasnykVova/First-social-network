import React, { useEffect, useState } from "react";
import s from './profilestatus.module.scss';

const ProfileStatusWithHooks = (props) => {
    // let stateWithSetState = useState(false);
    // let editMode = stateWithSetState[0];
    // let setEditMode = stateWithSetState[1];

    let [editMode,  setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect (() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

        return (
            <div className={s.status}>
                { editMode ? 
                    <div>
                        <input  onChange={onStatusChange} className={s.status__textInput} autoFocus={true} onBlur={deactivateEditMode} value={status} />
                    </div>  
                : 
                    <div>
                        <span className={s.status__text} onDoubleClick={activateEditMode}>{props.status || "-----"}</span>
                    </div>
                }    
            </div>
        )
    }


export default ProfileStatusWithHooks;