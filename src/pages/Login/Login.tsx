import { useState } from 'react';
import styles from './index.module.css';
import { useAtom } from 'jotai';
import { authAtom } from '../../atoms/auth';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/auth.service';

export default function Login() {
    const navigate = useNavigate();
    const [, setAuth] = useAtom(authAtom);
    const [username, setUsername] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await login(username);
            setAuth({ username });
            localStorage.setItem('accessToken', response.accessToken);
            localStorage.setItem('refreshToken', response.refreshToken);
            navigate('/');
        } catch (err) {
            alert('Login failed'+ err);
        }
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h2>Login</h2>
                <input
                className={styles.input}
                name="username"
                placeholder="Username"
                value={username}
                onChange={handleChange}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}


