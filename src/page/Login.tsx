import Footer from '../components/Footer/Footer';
import LoginPage from '../components/LoginPage/LoginPage';
import '../styles/pageStyle/login.scss';

const Login = () => {
    return(
        <div className='login'>
            <LoginPage />
            <Footer />
        </div>
    )
}

export default Login;