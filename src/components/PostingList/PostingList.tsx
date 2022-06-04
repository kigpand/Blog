import { IPosting } from '../../model/IPosting';
import { dummyData } from '../../model/util';
import Posting from '../Posting/Posting';
import styles from './PostingList.module.scss';

const PostingList = () => {

    return(
        <div className={styles.postingList}>
            { dummyData.map((data: IPosting, i) => {
                return <Posting title={data.title} content={data.content} hashTag={data.hashTag} date={data.date} key={i} />
            })}
        </div>
    )
}

export default PostingList;