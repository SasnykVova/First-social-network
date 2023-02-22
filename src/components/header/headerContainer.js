// core
import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { setAuthUserData, getAuthUserData, logOut } from './../../redux/auth-reducer';

const mapStateToProps = (state) => {
    return {
    userId: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    }
};

class HeaderContainer extends React.Component {

    componentDidMount () {
        this.props.getAuthUserData();
    }
    render () {
        return <Header {...this.props}/>
    }
}


export default connect(mapStateToProps, {setAuthUserData, getAuthUserData , logOut }) (HeaderContainer);