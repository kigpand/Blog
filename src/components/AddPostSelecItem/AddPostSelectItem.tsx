import AddPostFontStyle from '../AddPostFontStyle/AddPostFontStyle';
import AddPostSize from '../AddPostSize/AddPostSize';
import styles from './AddPostSelectItem.module.scss';

const AddPostSelectItem = () => {
    return(
        <div className={styles.addPostSelectItem}>
            <AddPostSize />
            <div className={styles.line}></div>
            <AddPostFontStyle />
            <div className={styles.line}></div>
        </div>
    )
}

export default AddPostSelectItem;