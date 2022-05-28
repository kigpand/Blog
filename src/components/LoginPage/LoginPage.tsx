import LoginInputer from '../LoginInputer/LoginInputer';
import styles from './LoginPage.module.scss';

const LoginPage = () => {

    return(
        <div className={styles.loginPage}>
            <h3 className={styles.title}>주인만 로그인가능합니다.</h3>
            <LoginInputer />
        </div>
    )
}

export default LoginPage;