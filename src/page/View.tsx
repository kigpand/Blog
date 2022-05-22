import { useSelector } from 'react-redux';
import { IPosting } from '../model/IPosting';
import '../styles/pageStyle/view.scss';

const View = () => {

    const post: IPosting = useSelector((state: any) => state.post);

    return(
        <div className="view">
            <div className="title">{post.data.title}</div>
            <div className="comment">{post.data.content}</div>
        </div>
    )
}

export default View;