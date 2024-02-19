import { useState, useEffect } from 'react';
import './header.css';
import auth from '../../utils/auth';

function Header() {
    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
        setLoggedIn(auth.isLoggedIn);
    });

    const logout = () => {
        auth.logout();
        setLoggedIn(false);
        window.location.assign('/login');
    } 

    return (
        <div className='p-1 bg-primary text-white'>
            <div className='container mx-auto'>
                <div className='flex flex-row justify-around'>
                    <div className=''>
                    <h1 className='text-6xl font-bold text-gray-200 p-1 flex justify-start'>Travel On</h1>
                    </div>
                    <nav className=''>
                        <div className=" p-2 flex flex-col justify-center">
                        <button className="text-2xl font-semibold text-gray-200 p-2 justify-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">Menu</button>
                            <ul show className="flex flex-row w-3/4 mx-auto justify-center">
                                {!loggedIn &&
                                <>
                                    <a href="/login"><li className='p-1'>Login</li></a>
                                    <a href="/register"><li className='p-1'>register</li></a>
                                </>
                                }
                                {loggedIn && 
                                <>
                                <li onClick={logout} className='p-1'>Logout</li>
                                </>
                                }
                                <a href="/"><li className='p-1'>Home</li></a>
                            </ul>         
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;