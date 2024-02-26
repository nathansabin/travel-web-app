import React, { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsername, setPassword, setVerify } from '../../utils/redux/actions/userAction';
import auth from '../../utils/auth';

function Login() {
    const { username, password, verifyPassword } = useSelector((state)=>state.user);
    const [ loading, setLoading] = useState(false);
    const [ error, setError ] = useState(false);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'username') {
            dispatch(setUsername(value));
        } else if (name === 'password'){
            dispatch(setPassword(value));
        } else if (name === 'verifyPassword'){
            dispatch(setVerify(value));
        }
    }

    const registerUser = async(event) => {
        event.preventDefault();
        setLoading(true);

        let data;

        if (password === verifyPassword) {
            data = await auth.register(username, password);
        }
        setLoading(false);
        if (data) {
            window.location.assign('/');
        }
        setError(true);
    }

    useEffect(() => {
        console.log(`username:${username} password:${password} verify:${verifyPassword}`)
    }, [username, password, verifyPassword])

    return (
        <div className='w-100 mt-4 py-4 bg-gray-50'>
        <div className='my-4 mx-auto container text-white bg-primary w-3/4 px-8 pt-4 pb-12 shadow-2xl'>
            <h1 className='text-3xl justify-start'>Register</h1>
            <hr className=''/>
            <form className='flex flex-col'>
                <input onChange={handleChange} name='username' type="username" value={username} className='my-2 text-black'></input>
                <input onChange={handleChange} name='password' type="password" value={password} className='my-2 text-black'></input>
                <input onChange={handleChange} name='verifyPassword' type="password" className='my-2 text-black'></input>
                <input onClick={registerUser} type="submit" className='py-4 px-2 text-white w-32 mt-4 bg-secondary-100 mx-auto rounded-md border-1 border-white'></input>
            </form>
                {loading && 
                    <div>
                        <h3>loading...</h3>
                    </div>
                }
                 {error &&
                <div>
                    <h3>Invalid register request</h3>
                </div>
            }
        </div>
        </div>
    );
}
 
export default Login;