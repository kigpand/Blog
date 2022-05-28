import './Header.scss';
import '../../styles/utill.scss';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

    const nav = useNavigate();

    function onLogoClick() {
        nav('/');
    }

    return(
        <div className='header'>
            <div className="logo" onClick={onLogoClick}>로고</div>
            <div className="header_buttons">
                <a target="_blank" href='https://github.com/kigpand' rel="noreferrer" className="git">깃허브</a>
                <a href='https://www.notion.so/c7aff4da8b6b4e9689dd4870723ebd1a' target="_blank" rel="noreferrer" className="notion">노션</a>
                <Link to='/login'><div className="login">로그인</div></Link>
            </div>
        </div>
    )
}

export default Header;