import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';

const Auth = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(user => {
                console.log('Logged in:', user);
                onLogin();
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="auth">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Auth;
