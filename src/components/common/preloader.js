import Users from "../users/users";
import s from "./preloader.module.scss";

const Preloader = (props) => {
    return (
        <div>
            {props.isFetching ? <div className={s.usersPreloader}><img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="preloader" /></div> : <Users
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
                usersData={props.usersData}
                unFollow={props.unFollow}
                follow={props.follow} 
                followingInProgress={props.followingInProgress}
                />}
        </div>
    )
}

export default Preloader;