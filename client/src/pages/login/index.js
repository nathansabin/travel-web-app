import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { setPassword, setUsername } from '../../utils/redux/actions/userAction';
import './login.css';
import auth from '../../utils/auth';

function Login() {
    const { username, password } = useSelector((state)=>state.user);
    const [ loading, setLoading] = useState(false);
    const [ error, setError ] = useState(false);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'username') {
            dispatch(setUsername(value));
        } else if (name === 'password'){
            dispatch(setPassword(value));
        } 
    }
   
    const loginUser = async(event) => {
        event.preventDefault();
        setLoading(true);

        const login = await auth.login(username, password);

        setLoading(false);
        if (login) {
            window.location.assign('/');
        }
        setError(true);
    }
    useEffect(() => {
        console.log('Current State:', { username, password });
      }, [username, password]);

    return (
        <div className='w-100 mt-4 py-4 bg-gray-50'>
        <div className='my-4 mx-auto container text-white bg-primary w-3/4 px-8 pt-4 pb-12 shadow-2xl'>
            <h1 className='text-3xl justify-start'>Login</h1>
            <hr className=''/>
            <form className='flex flex-col'>
                <input onChange={handleChange} name='username' type="username" value={username}  className='my-2 text-black'></input>
                <input onChange={handleChange} name='password' type="password" value={password} className='my-2 text-black'></input>
                <input onClick={loginUser} type="submit" className='py-4 px-2 text-secondary-200 w-32 mt-4 bg-secondary-100 mx-auto rounded-md border-1 border-white hover:text-white hover:bg-darkgreen'></input>
            </form>
            {loading && 
            <div>
                <h3>Loading...</h3>
            </div>
            }
            {error &&
                <div>
                    <h3>Invalid login request</h3>
                </div>
            }
        </div>
        </div>
    );
}
 
export default Login;