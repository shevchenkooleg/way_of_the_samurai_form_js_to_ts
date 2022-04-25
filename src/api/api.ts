import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '9afce5af-6c20-442a-857e-f0199432fe57'
    },
    data: {}
});


export const userAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        });
    },
    unfollow(userId:number) {
        return instance.delete(`follow/${userId}`).then(response => {
            return response.data
        })
    },
    follow(userId:number) {
        return instance.post(`follow/${userId}`).then(response => {
            return response.data
        })
    },
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me').then(response => {
            return response.data
        })
    }
}
