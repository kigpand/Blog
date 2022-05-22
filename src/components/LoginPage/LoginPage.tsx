import LoginInputer from '../LoginInputer/LoginInputer';
import './LoginPage.scss';

const LoginPage = () => {

    return(
        <div className="loginPage">
            <h3 className="title">주인만 로그인가능합니다.</h3>
            <LoginInputer />
        </div>
    )
}

export default LoginPage;