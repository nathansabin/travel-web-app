import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

const Auth = {
    getToken: function(){
        return localStorage.getItem('id_token');
    },
    isLoggedIn: function(){
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
        try {
        let token = await axios(
            {
                method: 'post',
                url: 'http://localhost:3001/user/auth/register',
                data: { username: username, password: password }
            }
        );
        token = token.data;
        localStorage.setItem('id_token', token);
        return true;
    } catch {
        console.log('error 404');
        return false;
    }
    },
    login: async function(username, password){
        try {
            let token = await axios(
                {
                    method: 'post',
                    url: 'http://localhost:3001/user/auth/login', 
                    data: { username:username, password: password}
                }
                );
            
            token = token.data;
            localStorage.setItem('id_token', token);
            return true;
        } catch {
            console.log(`ERROR 404`);
            return false;
        }
    }
}

Object.keys(Auth).forEach((key) => {
    if (typeof Auth[key] === 'function') {
        Auth[key] = Auth[key].bind(Auth);
    }
});

export default Auth;