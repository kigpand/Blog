import ViewBody from '../components/View/ViewBody/ViewBody';
import ViewHeader from '../components/View/ViewHeader/ViewHeader';
import '../styles/pageStyle/view.scss';

const View = () => {

    return(
        <div className="view">
            <ViewHeader />
            <ViewBody />
        </div>
    )
}

export default View;