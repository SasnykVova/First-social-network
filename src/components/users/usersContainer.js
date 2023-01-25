import { connect } from "react-redux";
import { follow, setCurrentPage, unFollow, getUsers } from "../../redux/users-reducer";
import React from "react";
// import Users from "./users";
// import axios from "axios";
// import s from "./usersContainer.module.scss";
import Preloader from "../common/preloader";



let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

class UsersContainer extends React.Component {
    componentDidMount = () => {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);

        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items);
        //     this.props.setUsersTotalCount(data.totalCount);
        // });
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(this.props.pageSize, pageNumber);
        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.setUsers(data.items);
        //     this.props.setCurrentPage(pageNumber);
        //     this.props.toggleIsFetching(false);
        // });   
    }

    render() {
        return <>
            <Preloader
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                usersData={this.props.usersData}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                isFetching={this.props.isFetching}  
                followingInProgress={this.props.followingInProgress}           
                />
        </>
    }
}

export default connect(mapStateToProps,
    {
        follow, unFollow, setCurrentPage, getUsers
    })(UsersContainer);