import { IPosting } from '../../model/IPosting';
import Posting from '../Posting/Posting';
import styles from './PostingList.module.scss';

const PostingList = () => {

    const dummyData: IPosting[] = [
        { title: '첫번째 타이틀', content: '얄리얄리얄라성 얄랄리 얄라', hashTag: ['123', '456', '789'], date: new Date() },
        { title: '두번째 타이틀', content: '얄리얄리얄라성 얄랄리 얄라', hashTag: ['2222'], date: new Date() },
        { title: '세번째 타이틀', content: '얄리얄리얄라성 얄랄리 얄라', hashTag: ['aas', 'dddd'], date: new Date() },
    ];

    return(
        <div className={styles.postingList}>
            { dummyData.map((data: IPosting, i) => {
                return <Posting title={data.title} content={data.content} hashTag={data.hashTag} date={data.date} key={i} />
            })}
        </div>
    )
}

export default PostingList;