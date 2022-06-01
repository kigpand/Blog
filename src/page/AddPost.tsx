import AddPostMain from '../components/AddPostMain/AddPostMain';
import styles from '../styles/pageStyle/addPost.module.scss';

const AddPost = () => {

    return(
        <div className={styles.addPost}>
            <AddPostMain />
        </div>
    )
}

export default AddPost;