import styles from './Search.module.scss';

const Search = () => {
    return (
        <div className={styles.search}>
            <input type= 'text' className={styles.searchInput} placeholder='검색할 태그를 입력해주세요'></input>
        </div>
    )
}

export default Search;