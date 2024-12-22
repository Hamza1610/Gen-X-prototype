import React, { useState } from 'react';
import { auth } from '../config/firebase';
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import '../styles/Signup.css'; // Import styles

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Handle Email and Password Signup
    const handleEmailSignup = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setSuccess('Signup successful!');
        } catch (err) {
            setError(err.message);
        }
    };

    // Handle Google Signup
    const handleGoogleSignup = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            setSuccess('Signed up with Google successfully!');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="sign-up">
            <div className="signup-container">
                <h1>Sign Up</h1>
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
                
                {/* Email and Password Signup Form */}
                <form onSubmit={handleEmailSignup} className="signup-form">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                    <button type="submit" className="signup-button">Sign Up</button>
                </form>

                <p>Or</p>

                {/* Google Signup Button */}
                <button onClick={handleGoogleSignup} className="google-button">
                    Sign Up with Google
                </button>
            </div>

        </div>
    );
};

export default Signup;
