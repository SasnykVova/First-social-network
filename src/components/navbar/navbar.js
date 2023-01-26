import { NavLink } from 'react-router-dom';
import s from './navbar.module.scss';
import './navbar.scss';
// import clsx from 'clsx';


const Navbar = (props) => {
    return (
        <nav className={s.menu}>
            <ul className={s.menu__list}>
                <li className="menu__item">
                    <NavLink to={props.auth.isAuth 
                    ? "/profile/" + props.auth.userId
                    : "/login"} className={s.menu__link}>Profile</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to="/dialogs" className={s.menu__link}>Messages</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to="users" className={s.menu__link}>Users</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to="/news" className={s.menu__link}>News</NavLink></li>
                <li className="menu__item">
                    <NavLink to="/music" className={s.menu__link}>Music</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to="/settings" className={s.menu__link}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
}


export default Navbar;