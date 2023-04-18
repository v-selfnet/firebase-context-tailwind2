import React, { useContext } from 'react';
import { AuthContext } from '../components/AuthProvider';

const Home = () => {

    const user = useContext(AuthContext)
    
    return (
        <div>
            <h3>{user && <span>{user.displayName}</span> }</h3>
        </div>
    );
};

export default Home;