import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile, getUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';
import { Navigate, useLocation, useNavigate, useParams, } from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';



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
    }

    render() {
        if (!this.props.auth) return <Navigate to="/login" />
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

export default connect(mapStateToProps, { setUserProfile, getUserProfile })(withRouter(AuthRedirectComponent));
