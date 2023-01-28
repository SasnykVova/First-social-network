import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './dialogs';



let mapStateToProps = (state) => {
    return {
        state:state.messagePage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        newElementChange: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
    }
}
}

export default compose(
    connect (mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs);

// const AuthRedirectComponent = withAuthRedirect(Dialogs);

// const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);

// export default DialogsContainer;