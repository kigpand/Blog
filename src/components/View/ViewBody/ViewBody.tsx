import { useSelector } from 'react-redux';
import { IPosting } from '../../../model/IPosting';
import styles from './ViewBody.module.scss';

const ViewBody = () => {

    const post: IPosting = useSelector((state: any) => state.post.post);

    return(
        <div className={styles.viewBody}>{post.content}</div>
    )
}

export default ViewBody;