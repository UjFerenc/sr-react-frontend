import { signal } from "@preact/signals-core";
import axios from "axios";
import env from "react-dotenv";

const user = signal(localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')))

function login(email, password) {
    return new Promise((resolve,reject) => {
        axios.post(
            env.API_URL + '/user/login',
            {
                email,
                password
            }
        ).then(res => {
            user.value = res.data
            localStorage.setItem('user', JSON.stringify(res.data))

            resolve(res)
        }).catch(err => reject(err))
    })
}

function register(email, password) {
    return new Promise((resolve,reject) => {
        axios.post(
            env.API_URL + '/user/register',
            {
                email,
                password
            }
        ).then(res => resolve(res)).catch(err => reject(err))
    })
}

function logout() {
    localStorage.removeItem('user')
    user.value = null;
}

export { login, register, logout, user as loggedIn }