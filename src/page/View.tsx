import ViewBody from '../components/View/ViewBody/ViewBody';
import ViewHeader from '../components/View/ViewHeader/ViewHeader';
import styles from '../styles/pageStyle/view.module.scss';

const View = () => {

    return(
        <div className={styles.view}>
            <ViewHeader />
            <ViewBody />
        </div>
    )
}

export default View;