import React from "react";
import s from './profilestatus.module.scss';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }
    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        })
    }
    render() {
        return (
            <div className={s.status}>
                {this.state.editMode ?
                    <div>
                        <input  onChange={this.onStatusChange} className={s.status__textInput} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
                    </div>
                    :
                    <div>
                        <span className={s.status__text} onDoubleClick={this.activateEditMode}>{this.props.status || "-----"}</span>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;