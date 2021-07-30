// import axios from "axios";

// export const api = axios.create({
//     baseURL: 'https://us-central1-missao-newton.cloudfunctions.net/futureEatsB',
// })

import Cookies from 'js-cookie';
import qs from 'qs';


const BASEAPI = 'https://us-central1-missao-newton.cloudfunctions.net/{{appName}}/restaurants';

const apiFetchPost = async (endpoint, body) => {
    if(!body.token) {
        let token = Cookies.get('token');
        if(token) {
            body.token = token;
        }
    }

    const res = await fetch(BASEAPI+endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'email': 'astrodev@future4.com',
            'password': '123456'
        }),
        redirect: 'follow'
    });
    const json = await res.json();

    if(json.notallowed) {
        window.location.href = '/signin';
        return;
    }

    return json;
}

const apiFetchGet = async (endpoint, body = []) => {
    if(!body.token) {
        let token = Cookies.get('token');
        if(token) {
            body.token = token;
        }
    }

    const res = await fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    const json = await res.json();

    if(json.notallowed) {
        window.location.href = '/signin';
        return;
    }

    return json;
}

const FooAPI = {

    login: async (email, password) => {
        const json = await apiFetchPost(
            '/user/signin',
            {email, password}
        );
        return json;
    },

    getStates:async () => {
        const json = await apiFetchGet(
            '/name'
        );
        return json.name;
    },

    getCategories:async () => {
        const json = await apiFetchGet(
            '/category'
        );
        return json.category;
    }

};

export default () => FooAPI;