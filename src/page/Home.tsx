import { useSelector } from 'react-redux';
import PostingList from '../components/PostingList/PostingList';
import SearchList from '../components/SearchList/SearchList';
import styles from '../styles/pageStyle/home.module.scss';

const Home = () => {

    const searchList = useSelector((state: any) => state.post.searchList);

    return(
        <div className={styles.home}>
            { searchList.length > 0 
            ? <SearchList />
            : <PostingList /> }
        </div>
    )
}

export default Home;