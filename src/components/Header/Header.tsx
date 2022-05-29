import styles from'./Header.module.scss';
import '../../styles/utill.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setLogin } from '../../reducer/user';

const Header = () => {

    const nav = useNavigate();
    const dispatch = useDispatch();
    const loginState = useSelector((state: any) => state.user.login);

    function onLogoClick() {
        nav('/');
    }

    function onLogOut() {
        dispatch(setLogin(false));
        nav('/');
    }

    function onAddPost() {
        nav('/addPost');
    }

    return(
        <div className={styles.header}>
            <div className={styles.logo} onClick={onLogoClick}>로고</div>
            <div className={styles.header_buttons}>
                <a target="_blank" href='https://github.com/kigpand' rel="noreferrer" className={styles.git}>깃허브</a>
                <a href='https://www.notion.so/c7aff4da8b6b4e9689dd4870723ebd1a' target="_blank" rel="noreferrer" className={styles.notion}>노션</a>
                { !loginState 
                    ? <Link to='/login'><div className={styles.login}>로그인</div></Link>
                    : <div className={styles.addPost} onClick={onAddPost}>게시글 작성</div>
                }
                { loginState && <div className={styles.logout} onClick={onLogOut}>로그아웃</div>}
            </div>
        </div>
    )
}

export default Header;