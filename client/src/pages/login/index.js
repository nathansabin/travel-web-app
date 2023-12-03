import React, { useState } from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import auth from '../../utils/auth';

function Login() {
    const [formState, setFormState] = useState({ username: '', password: ''});

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    }

    const loginUser = async(event) => {
        event.preventDefault();

        const { username, password } = formState;
        const token = await auth.login(username, password);
    }

    return (
        <div className='login mt-3'>
        <div className='container'>
            <h1 className='col-12'>Login</h1>
            <form className='col col-vert'>
                <input onChange={handleChange} name='username' type="username" className='col-12 col-lg-8 mb-2'></input>
                <input onChange={handleChange} name='password' type="password" className='col-12 col-lg-8 mb-3'></input>
                <input onClick={loginUser} type="submit" className='col-8 col-lg-6 btn btn-primary button'></input>
            </form>
        </div>
        </div>
    );
}
 
export default Login;