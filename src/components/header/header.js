import { NavLink } from 'react-router-dom';
import s from './header.module.scss';



const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.header__logo}>
                <img className={s.header__img} src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="Logo"></img>
            </div>
            <div className={s.loginBlock}>
                {props.isAuth 
                ? <div className={s.loginLogOutBlock}>
                    <div className={s.loginLogOutBlock__login}>{props.login}</div>
                    <div className={s.loginLogOutBlock__wrapperButton}><button onClick={props.logOut} className={s.loginLogOutBlock__button}>Log out</button></div>
                </div>
                : <NavLink className={s.loginBlock__loginLink} to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}
export default Header;
