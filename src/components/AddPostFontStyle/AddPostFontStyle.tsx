import styles from './AddPostFontStyle.module.scss';

const AddPostFontStyle = () => {
    return (
        <div className={styles.addPostFontStyle}>
            <div className={styles.bold}>B</div>
            <div className={styles.italic}>I</div>
            <div className={styles.line}>F</div>
        </div>
    )
}

export default AddPostFontStyle;