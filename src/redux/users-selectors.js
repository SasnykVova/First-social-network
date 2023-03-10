import { createSelector } from "reselect"

export const getUsersPropSelector = (state) => {
    return state.usersPage.usersData
}
export const getUsersProp = createSelector(getUsersPropSelector, (users) => {
    return users.filter(u => true)
})
export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}
export const getPortionSize = (state) => {
    return state.usersPage.portionSize;
}
export const getPortionNumber = (state) => {
    return state.usersPage.portionNumber;
}