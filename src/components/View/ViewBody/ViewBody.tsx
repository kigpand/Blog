import { useSelector } from 'react-redux';
import { IPosting } from '../../../model/IPosting';
import './ViewBody.scss';

const ViewBody = () => {

    const post: IPosting = useSelector((state: any) => state.post);

    return(
        <div className="viewBody">{post.content}</div>
    )
}

export default ViewBody;