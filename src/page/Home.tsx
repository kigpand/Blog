import PostingList from '../components/PostingList/PostingList';
import styles from '../styles/pageStyle/home.module.scss';

const Home = () => {
    return(
        <div className={styles.home}>
            <PostingList />
        </div>
    )
}

export default Home;