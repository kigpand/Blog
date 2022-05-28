import Footer from '../components/Footer/Footer';
import LoginPage from '../components/LoginPage/LoginPage';
import styles from '../styles/pageStyle/login.module.scss';

const Login = () => {
    return(
        <div className={styles.login}>
            <LoginPage />
            <Footer />
        </div>
    )
}

export default Login;