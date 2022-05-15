import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IPosting } from '../../model/IPosting';
import { getPosting } from '../../reducer/post';
import './Posting.scss';

const Posting = (data: IPosting) => {

    const nav = useNavigate();
    const dispatch = useDispatch();

    function onClick() {
        dispatch(getPosting(data));
        nav('/view');
    }

    return (
        <div className='posting' onClick={onClick}>{data.data.title}</div>
    )
}

export default Posting;