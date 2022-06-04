import { useSelector } from 'react-redux';
import { IPosting } from '../../model/IPosting';
import Posting from '../Posting/Posting';
import styles from './SearchList.module.scss';

const SearchList = () => {
    const searchList = useSelector((state: any) => state.post.searchList);
    return(
        <div className={styles.searchList}>
            { searchList.map((data: IPosting) => {
                return <Posting title={data.title} content={data.content} hashTag={data.hashTag} date={data.date} key={data.title} />
            })}
        </div>
    )
}

export default SearchList;