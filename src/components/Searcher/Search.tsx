import { useDispatch } from 'react-redux';
import { changeSearchItem } from '../../reducer/post';
import styles from './Search.module.scss';

const Search = () => {

    const dispatch = useDispatch();

    function onSearch(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key ==='Enter') {
            dispatch(changeSearchItem(e.currentTarget.value));
            e.currentTarget.value = '';
        }
    }

    return (
        <div className={styles.search}>
            <input type= 'text' className={styles.searchInput} placeholder='검색할 태그를 입력해주세요' onKeyDown={onSearch}></input>
        </div>
    )
}

export default Search;