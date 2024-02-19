import React, { useState } from 'react';
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
        <div className='w-100 mt-4 py-4 bg-gray-50'>
        <div className='my-4 mx-auto container text-white bg-primary w-3/4 px-8 pt-4 pb-12 shadow-2xl'>
            <h1 className='text-3xl justify-start'>Register</h1>
            <hr className=''/>
            <form className='flex flex-col'>
                <input onChange={handleChange} name='username' type="username" className='my-2'></input>
                <input onChange={handleChange} name='password' type="password" className='my-2'></input>
                <input onChange={handleChange} name='verifyPassword' type="password" className='my-2'></input>
                <input onClick={registerUser} type="submit" className='py-4 px-2 text-white w-32 mt-4 bg-secondary-100 mx-auto rounded-md border-1 border-white'></input>
            </form>
                {loading && 
                    <div>
                        <h3>loading...</h3>
                    </div>
                }
        </div>
        </div>
    );
}
 
export default Login;