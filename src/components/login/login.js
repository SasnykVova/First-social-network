import s from './login.module.scss';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../FormControls/FormControls';
import { required } from '../../validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.login__form}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]} />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type={"password"} component={Input} validate={[required]} />
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input} /> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginRedaxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Navigate to={"/profile"} />
    }

    return (
        <div class={s.login}>
            <h1 class={s.login__title}>Login</h1>
            <LoginRedaxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login);