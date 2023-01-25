import React from "react";
import s from './users.module.scss';
import clsx from 'clsx';
import userPhoto from '../../assets/images/userAvatar.png';
import { NavLink } from "react-router-dom";
// import axios from "axios";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.userPage}>
            <div>
                {pages.map(p =>
                    <span className={clsx(s.pageNumber, props.currentPage === p && s.selectedPage)}
                        onClick={(e) => { props.onPageChanged(p) }} >{p > 8 ? p === 8 : p}</span>
                )}
            </div>
            {
                props.usersData.map(u => <div className={s.user} key={u.id} >
                    <div className={s.user__wrapper}>
                        <div className={s.avatarButtonWrapper}>
                            <div className={s.avatarButtonWrapper__avatar}>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small ? u.photos.small : userPhoto} alt='avatarImg' />
                                </NavLink>
                            </div>
                            <div className={s.avatarButtonWrapper__buttonContainer}>
                                {u.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} 
                                    onClick={() => {props.unFollow(u.id)}
                                    } className={s.avatarButtonWrapper__buttonFollow}>Follow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === u.id)} 
                                    onClick={() => {props.follow(u.id)}} 
                                    className={s.avatarButtonWrapper__buttonUnfollow}>Unfollow</button>}
                            </div>
                        </div>
                        <div className={s.user__infoWrapper}>
                            <div className={s.nameContainer}>
                                <div className={s.nameContainer__name}>{u.name}</div>
                                <div className={s.nameContainer__status}>{u.status}</div>
                            </div>
                            <div className={s.locationContainer}>
                                <div className={s.locationContainer__country}>{"u.location.country"}</div>
                                <div className={s.locationContainer__city}>{"u.location.city"}</div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}


export default Users;