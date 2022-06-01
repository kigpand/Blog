import styles from './TagItem.module.scss';

interface ITag {
    item: string
}

const TagItem = ({ item }: ITag) => {

    return(
        <span className={styles.tag}>{item}</span>
    )
}

export default TagItem;