import { IPosting } from '../../model/IPosting';
import './Posting.scss';

const Posting = (data: IPosting) => {
    return (
        <div className='posting'>{data.data.title}</div>
    )
}

export default Posting;