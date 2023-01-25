// import axios from 'axios';
// import s from './users.module.scss';
// import userPhoto from '../../assets/images/userAvatar.png';



// const Users = (props) => {
    // let getUsers = () => 
    // {
    //     if(props.state.usersData.length === 0) {
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //         props.setUsers(response.data.items);
    //         });
    //     }
    // }


//     return <div className={s.userPage}>
//     <button onClick={getUsers} className={s.getUsersbtn}>Get users</button>
//         {
//             props.state.usersData.map(u => <div className={s.user} key={u.id} >
//                 <div className={s.user__wrapper}>
//                     <div className={s.avatarButtonWrapper}>
//                         <div className={s.avatarButtonWrapper__avatar}>
//                             <img src={u.photos.small ? u.photos.small : userPhoto} alt='avatarImg' />
//                         </div>
//                         <div className={s.avatarButtonWrapper__buttonContainer}>
//                             {u.followed
//                                 ? <button onClick={() => { props.unfollow(u.id) }} className={s.avatarButtonWrapper__buttonUnfollow}>Unfollow</button>
//                                 : <button onClick={() => { props.follow(u.id) }} className={s.avatarButtonWrapper__buttonFollow}>Follow</button>}
//                         </div>
//                     </div>
//                     <div className={s.user__infoWrapper}>
//                         <div className={s.nameContainer}>
//                             <div className={s.nameContainer__name}>{u.name}</div>
//                             <div className={s.nameContainer__status}>{u.status}</div>
//                         </div>
//                         <div className={s.locationContainer}>
//                             <div className={s.locationContainer__country}>{"u.location.country"}</div>
//                             <div className={s.locationContainer__city}>{"u.location.city"}</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>)
//         }
//     </div>
// }

// export default Users;