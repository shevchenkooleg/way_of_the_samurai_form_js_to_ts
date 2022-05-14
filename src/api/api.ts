import axios from "axios";
import {apiConfig} from "../config/config";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': apiConfig.APP_KEY as string
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
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`/profile/status`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me').then(response => {
            return response.data
        })
    },
    logIn(email: string, password: string, rememberMe: boolean) {
        return instance.post('/auth/login', {email, password, rememberMe}).then(response => {
            return response
            }
        )
    },
    logOut() {
        return instance.delete('/auth/login').then(response => {
                return response
            }
        )
    }
}
