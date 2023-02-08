import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile, getUserProfile , getStatus, updateStatus} from '../../redux/profile-reducer';
import Profile from './Profile';
import { useLocation, useNavigate, useParams, } from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// export default connect(mapStateToProps, { setUserProfile, getUserProfile })(withRouter(AuthRedirectComponent));

export default compose(
    connect(mapStateToProps, { setUserProfile, getUserProfile, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
