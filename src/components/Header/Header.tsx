import './Header.scss';
import '../../styles/utill.scss';

const Header = () => {
    return(
        <div className='header'>
            <div className="logo">로고</div>
            <div className="header_buttons">
                <div className="git">깃허브</div>
                <div className="notion">노션</div>
                <div className="login">로그인</div>
            </div>
        </div>
    )
}

export default Header;