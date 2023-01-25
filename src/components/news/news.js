import s from './news.module.scss';
import New from './new/new.js';


const News = (props) => {
    let newElement = props.state.newData.map(n => <New newText={n.newText}></New>);
    let newTextOfNew = props.state.newTextOfNew;

    let addTextOfNew = () => {
        props.addTextOfNew();
    };
    let changeTextOfNew = (e) => {
        let newSymbol = e.target.value;
        props.changeTextOfNew(newSymbol);
    };

    return (
        <div className={s.News}>
            <div className={s.News__wrapper}>
                <div className={s.News__addNew}>
                    <div className={s.News__textareaWrapper}>
                        <textarea className={s.News__textarea} onChange={changeTextOfNew} value={newTextOfNew} Placeholder="Add your new"></textarea>
                    </div>
                    <div className={s.News__btnAddNewWrapper}>
                        <button className={s.News__btnAddNew} onClick={addTextOfNew}>Add new</button>
                    </div>
                </div>
                {newElement}
            </div>
        </div>
    );
}


export default News;