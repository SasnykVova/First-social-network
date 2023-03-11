import s from './login.module.scss';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../FormControls/FormControls';
import { required } from '../../validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';
import React from 'react';


class Login extends React.Component {

    onSubmit = (formData) => {
        this.props.login(formData.email, formData.password, formData.rememberMe);
    }
    render() {
        if (this.props.isAuth) {
            return <Navigate to={"/profile/" + this.props.userId} />
        }
        return (
            <div class={s.login}>
                <h1 class={s.login__title}>Login</h1>
                <LoginRedaxForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}
// if (this.props.isAuth) {
//     return <Navigate to={"/profile/" + this.props.userId} />
// }

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
})

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.login__form}>
            <div>
                <Field className={s.login__input} placeholder={"Email"} name={"email"} component={Input} validate={[required]} />
            </div>
            <div>
                <Field className={s.login__input} placeholder={"Password"} name={"password"} type={"password"} component={Input} validate={[required]} />
            </div>
            {props.error && <div className={s.formCommonError}>
                {props.error}
            </div>
            }
            <div className={s.login__checkbox}>
                <Field className={s.login__customCheckbox} id={"happy"} type={"checkbox"} name={"rememberMe"} component={Input}/>
                <label className={s.login__label} for={"happy"}>Remember me</label>
            </div>
            <div>
                <button className={s.login__button}>Login</button>
            </div>
        </form>
    )
}

const LoginRedaxForm = reduxForm({ form: 'login' })(LoginForm);

export default connect(mapStateToProps, { login })(Login);