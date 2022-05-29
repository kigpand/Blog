import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLogin } from '../../reducer/user';
import styles from './LoginInputer.module.scss';

const LoginInputer = () => {

    const dispatch = useDispatch();
    const [isCorrectId, setIsCorrectId] = useState<Boolean>(false);
    const [isUnCorrectLogin, setIsUnCorrectLogin] = useState<Boolean>(false);

    const nav = useNavigate();

    function onCorrectId(e: React.KeyboardEvent<HTMLInputElement>) {
        setIsUnCorrectLogin(false);
        if (e.currentTarget.value !== 'kigpand') {
            setIsCorrectId(false);
            return false;
        }

        if (e.code === 'Enter') {
            if (e.currentTarget.value === 'kigpand') {
                setIsCorrectId(true);
                return true;
            }

            return false;
        }
    }

    function onCorrectPw(e: React.KeyboardEvent<HTMLInputElement>) {
        setIsUnCorrectLogin(false);
        if (e.code === 'Enter') {
            if (e.currentTarget.value === 'lagisin0225') {
                nav('/');
                dispatch(setLogin(true));
            }
            setIsUnCorrectLogin(true);
            return false;
        }
    }

    return(
        <div className={styles.loginInputer}>
            <input type='text' className={styles.idInputer} placeholder='아이디를 입력하세요' onKeyDown={onCorrectId}></input>
            { isCorrectId && <input type='password' className={styles.pwInputer} placeholder='비밀번호를 입력하세요' onKeyDown={onCorrectPw}></input>}
            { isUnCorrectLogin && <div className={styles.wrong}>입력된 정보가 잘못되었습니다.</div>}
        </div>
    )
}

export default LoginInputer;