import s from './login.module.scss';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../FormControls/FormControls';
import { required } from '../../validators/validators';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.login__form}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginRedaxForm = reduxForm({form: 'login'}) (LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <div class={s.login}>
            <h1 class={s.login__title}>Login</h1>
            <LoginRedaxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;