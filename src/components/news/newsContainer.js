import { connect } from 'react-redux';
import { addNewCreator, textOfNewCreator } from '../../redux/news-reducer';
import News from './news';


let mapStateToProps = (state) => {
    return {
        state:state.newPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addTextOfNew: () => {
            dispatch(addNewCreator())
        },
        changeTextOfNew: (newSymbol) => {
            dispatch(textOfNewCreator(newSymbol))
    }
}
}

const NewsContainer = connect (mapStateToProps, mapDispatchToProps) (News);



export default NewsContainer;