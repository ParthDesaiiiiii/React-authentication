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
        if (!form.email || !form.password) {
          return alert('All fields are required');
        }
        try {
          const data = authenticate(form);
          dispatch(login(data.user));
          navigate(data.user.role === 'admin' ? '/admin' : '/dashboard');
        } catch (err) {
          alert('Invalid credentials');
        }    
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="email" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} required />
            <button type="submit">Login</button>

            <p style={{ marginTop: '15px', textAlign: 'center' }}>
                New user? <a href="/register">Register here</a>
            </p>
        </form>
    );
}

export default Login;