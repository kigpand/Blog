import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import PostingList from '../components/PostingList/PostingList';
import '../styles/pageStyle/home.scss';

const Home = () => {
    return(
        <div className='home'>
            <Header />
            <PostingList />
            <Footer />
        </div>
    )
}

export default Home;