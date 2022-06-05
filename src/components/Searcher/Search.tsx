import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IPosting } from '../../model/IPosting';
import { dummyData } from '../../model/util';
import { makeSearchList } from '../../reducer/post';
import styles from './Search.module.scss';

const Search = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();

    function onSearch(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key ==='Enter') {
            const searcher: IPosting[] = [];
            if (e.currentTarget.value) {
                // eslint-disable-next-line array-callback-return
                dummyData.map((data: IPosting) => {
                    const result = data.hashTag.find((v: string) => v === e.currentTarget.value);
                    if (result) {
                        searcher.push(data);
                    }
                });
            }
        
            if (searcher.length > 0) {
                dispatch(makeSearchList(searcher));
            } else {
                dispatch(makeSearchList([]));
            }

            nav('/');
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