import Posting from '../Posting/Posting';
import './PostingList.scss';

const PostingList = () => {

    const dummyData:any[] = [
        { title: '첫번째 타이틀', content: '얄리얄리얄라성 얄랄리 얄라' },
        { title: '두번째 타이틀', content: '얄리얄리얄라성 얄랄리 얄라' },
        { title: '세번째 타이틀', content: '얄리얄리얄라성 얄랄리 얄라' },
        { title: '네번째 타이틀', content: '얄리얄리얄라성 얄랄리 얄라' },
        { title: '다섯번째 타이틀', content: '얄리얄리얄라성 얄랄리 얄라' },
    ];

    return(
        <div className='postingList'>
            { dummyData.map((data, i) => {
                return <Posting data={data} key={i} />
            })}
        </div>
    )
}

export default PostingList;