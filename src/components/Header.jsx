import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isAuthenticated }) => {
    const auth = getAuth();
    const handleLogout = () => {
        signOut(auth).then(() => {
            console.log('Logged out successfully');
            window.location.href = '/login';
        }).catch(error => {
            console.error('Error logging out:', error);
        });
    };

    return (
        <header>
            <nav>
                {isAuthenticated ? (
                    <>
                        <Link to="/products">Products</Link>
                        <Link to="/cart">Cart</Link>
                        <Link to="/admin">Admin Dashboard</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </nav>
        </header>
    );
};

export default Header;
