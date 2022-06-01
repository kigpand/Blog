import { useRef, useState } from 'react';
import AddPostSelectItem from '../AddPostSelecItem/AddPostSelectItem';
import TagItem from '../TagItem/TagItem';
import styles from './AddPostMain.module.scss';

const AddPostMain = () => {

    const titleRef = useRef<HTMLInputElement>(null);
    const [tagItem, setTagItem] = useState<string[]>([]);

    function onTagEnter(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            setTagItem([...tagItem, e.currentTarget.value]);
            e.currentTarget.value = '';
        }
    }

    return(
        <div className={styles.addPostMain}>
            <input type='text' className={styles.title} ref={titleRef} placeholder='제목을 입력하세요'></input>
            <div className={styles.line}></div>
            <input type='text' className={styles.tagInputer} placeholder='태그를 입력하세요' onKeyDown={onTagEnter}></input>
            <div className={styles.tagContainer}>
                { tagItem.length > 0 && tagItem.map((tag: string, i: number) => {
                    return <TagItem item={tag} key={i}/>
                })}
            </div>
            <AddPostSelectItem />
        </div>
    )
}

export default AddPostMain;