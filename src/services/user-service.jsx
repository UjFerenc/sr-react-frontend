import { signal } from "@preact/signals-core";
import axios from "axios";
import env from "react-dotenv";

const user = signal(localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')))

async function login(email, password) {
    return axios.post(
        env.API_URL + '/user/login',
        {
            email,
            password
        }
    ).then(response => {
        user.value = response.data
    })
}

async function register(email, password) {
    try {
        const registerResponse = await axios.post(
            env.API_URL + '/user/register',
            {
                email,
                password
            }
        )
    } catch (error) {
        console.log(error)
    }
}

export { login, register, user as loggedIn }