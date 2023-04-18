import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handelLogout = () => {
        logOut()
            .then(() => console.log('Sign out success!'))
            .catch(error => console.log(error.message, error.code))
    }

    return (
        <div className="navbar bg-base-300">
            <a className="btn btn-ghost normal-case text-xl">Context API</a>
            <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>

            {
                // observer user state change
                user ?
                    <>
                        <span>{user.email}</span>
                        <button className='btn btn-xs' onClick={handelLogout}>Sign out</button>
                    </> : <button className='btn btn-xs'>
                        <Link to='/login'>Login</Link>
                    </button>
            }
        </div>
    );
};

export default Header;