import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.css';
import { authAtom } from '../../atoms/auth';

function Home() {
  const [auth, setAuth] = useAtom(authAtom);
  const navigate = useNavigate();

  const logout = () => {
    setAuth({ username: '' });
    navigate('/login');
  };

  return (
    <div className={styles.wrapper}>
      <h1>Welcome to your Profile</h1>
      <p>Your username: {auth?.username}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Home;
