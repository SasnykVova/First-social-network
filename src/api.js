import axios from "axios"


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "38ce21b0-b4e6-4f16-b911-84c1bbd5f9aa",
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(response => {
            return response.data
        })
    },

    unFollowAPI(id) {
        return instance.delete(`follow/` + id,
        ).then(response => {
            return response.data
        })
    },

    followAPI(id) {
        return instance.post(`follow/` + id, {},
        ).then(response => {
            return response.data
        })
    },
    getProfile(userId) {
        console.warn('Obsolete method . Please use profileAPI object')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status) {
        return instance.put('profile/status', {status: status})
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}

