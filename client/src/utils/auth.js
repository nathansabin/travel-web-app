import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

const Auth = {
    getToken: function(){
        console.log(localStorage.getItem('id_token'));
        // return localStorage.getItem('id_token');
    },
    isLoggedIn: function(){
        console.log(this);
        const token = this.getToken();
        return token && !this.isTokenExpired() ? true : false;
    },
    isTokenExpired: function(){
        let token = this.getToken();
        if (!token) {
            return true;
        }
        const decoded = jwtDecode(token);
        if (decoded.exp < Date.now() / 1000) {
            localStorage.removeItem('id_token');
            return true;
        }
        return false;
    },
    logout: function(){
        localStorage.removeItem('id_token');
    },
    register: async function(username, password){
        let token = await axios(
            {
                method: 'post',
                url: 'http://localhost:3001/user/auth/register',
                data: { username: username, password: password }
            }
        );
        token = token.data;
        if (!token) {
            return false;
        }
        localStorage.setItem('id_token', token);
        return true;
    },
    login: async function(username, password){
        let token = await axios(
            {
                method: 'post',
                url: 'http://localhost:3001/user/auth/login', 
                data: { username:username, password: password}
            }
            );
        token = token.data;
        console.log(token);
        if (!token) {
            return false;
        }
        localStorage.setItem('id_token', token);
        return true;
    }
}

Object.keys(Auth).forEach((key) => {
    if (typeof Auth[key] === 'function') {
        Auth[key] = Auth[key].bind(Auth);
    }
});

export default Auth;