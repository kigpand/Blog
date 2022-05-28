import { useSelector } from 'react-redux';
import { IPosting } from '../../../model/IPosting';
import styles from './ViewHeader.module.scss';

const ViewHeader = () => {

    const post: IPosting = useSelector((state: any) => state.post.post);

    return(
        <div className={styles.viewHeader}>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.time}>{new Date(post.date).getFullYear() + '년 ' + (new Date(post.date).getMonth() + 1) + '월 ' + new Date(post.date).getDate() + '일'}</div>
            <div className={styles.hash}>
                { post.hashTag.map((hash: string, i: number) => { 
                    return <span className={styles.hashItem} key={i}>{hash}</span>
                })}
            </div>
        </div>
    )
}

export default ViewHeader;