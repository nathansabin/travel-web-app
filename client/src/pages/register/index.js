import React, { useState } from 'react';
import './register.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import auth from '../../utils/auth';

function Login() {
    const [ formState, setFormState ] = useState({ username: '', password: '', verifyPassword: '' });
    const [ loading, setLoading ] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    }

    const registerUser = async(event) => {
        event.preventDefault();
        setLoading(true);

        const { username, password, verifyPassword } = formState;
        let data;

        if (password === verifyPassword) {
            data = auth.register(username, password);
        }
        if (data) {
            window.location.assign('/');
        }

        setLoading(false);
    }

    return (
        <div className='login mt-3'>
        <div className='container'>
            <h1 className='col-12'>register</h1>
            <form className='col col-vert'>
                <input onChange={handleChange} name='username' type="username" className='col-12 col-lg-8 mb-2'></input>
                <input onChange={handleChange} name='password' type="password" className='col-12 col-lg-8 mb-2'></input>
                <input onChange={handleChange} name='verifyPassword' type="password" className='col-12 col-lg-8 mb-3'></input>
                <input onClick={registerUser} type="submit" className='col-8 col-lg-6 btn btn-primary button'></input>
                {loading && 
                    <div>
                        <h3>loading...</h3>
                    </div>
                }
            </form>
        </div>
        </div>
    );
}
 
export default Login;