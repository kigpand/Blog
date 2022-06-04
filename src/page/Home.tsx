import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostingList from '../components/PostingList/PostingList';
import SearchList from '../components/SearchList/SearchList';
import { IPosting } from '../model/IPosting';
import { dummyData } from '../model/util';
import { changeSearchItem, makeSearchList } from '../reducer/post';
import styles from '../styles/pageStyle/home.module.scss';

const Home = () => {

    const searchItem = useSelector((state: any) => state.post.searchItem);
    const searchList = useSelector((state: any) => state.post.searchList);
    const dispatch = useDispatch();

    useEffect(() => {
        const searcher: IPosting[] = [];
        if (searchItem) {
            // eslint-disable-next-line array-callback-return
            dummyData.map((data: IPosting) => {
                const result = data.hashTag.find((v: string) => v === searchItem);
                if (result) {
                    searcher.push(data);
                }
            });
        }

        if (searcher.length > 0) {
            dispatch(makeSearchList(searcher));
        } else {
            dispatch(makeSearchList([]));
            dispatch(changeSearchItem(null));
        }
    }, [dispatch, searchItem]);

    return(
        <div className={styles.home}>
            { searchList.length > 0 
            ? <SearchList />
            : <PostingList /> }
        </div>
    )
}

export default Home;