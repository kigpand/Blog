import { useSelector } from 'react-redux';
import { IPosting } from '../../../model/IPosting';
import './ViewHeader.scss';

const ViewHeader = () => {

    const post: IPosting = useSelector((state: any) => state.post);

    return(
        <div>{post.data.title}</div>
    )
}

export default ViewHeader;