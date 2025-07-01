import React, { useState } from 'react';
import { register } from '../features/auth/AuthService';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [form, setForm] = useState({ email: '', password: '', role: 'user' });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        register(form);
        alert('Registered Successfully');
        navigate('/login');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input type="email" placeholder='Email' onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            <input type="password" placeholder='Password' onChange={(e) => setForm({ ...form, password: e.target.value })} required />
            <select onChange={(e) => setForm({ ...form, role: e.target.value })}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select>
            <button type='submit'>Register</button>
        </form>
    );
}

export default Register;