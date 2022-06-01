import styles from './AddPostSize.module.scss';

const AddPostSize = () => {
    return(
        <div className={styles.addPostSize}>
            <div className={styles.btn}>H1</div>
            <div className={styles.btn}>H2</div>
            <div className={styles.btn}>H3</div>
        </div>
    )
}

export default AddPostSize;