import decode from 'jwt-decode';
import axios from 'axios';

class Auth {
    getToken() {
        return localStorage.getItem('id_token');
    }

    isLoggedIn() {
        const token = this.getToken();
        return token && !this.isTokenExpired() ? true : false;
    }

    isTokenExpired() {
        const decoded = decode(this.getToken);
        if (decoded.exp < Date.now() / 1000) {
            localStorage.removeItem('id_token');
            return true;
        }
        return false;
    }

    logout() {
        localStorage.removeItem('id_token');
    }

    async login(username, password) {
        const token = await axios.get('/user/auth/login', {
            username: username,
            password: password
        });
        if (!token) {
            return false;
        }
        localStorage.setItem('id_token', token);
        return true;
    }
}

const auth = new Auth();
export default auth;