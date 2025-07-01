import React, {useState} from "react";
import { authenticate } from "../features/auth/AuthService";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
    const [form, setForm] = useState({ email: '', password: ''});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = authenticate(form);
        if(user) {
            dispatch(login(user));
            navigate(user.role === 'admin' ? '/admin' : '/dashboard');
        } else {
            alert('Invalid Credentials');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="email" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} required />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;