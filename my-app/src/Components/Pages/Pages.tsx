import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { useDispatch, useSelector} from "react-redux";
import { selectPage } from "../../Reducer/PageReducer";
import { Dispatch } from "redux";

import { nextPage, prevPage, resetPage } from '../../Action/Actions'

interface iProps{
    page: number;
    prevPage: string;
    nextPage: string;
    resetPage: string;
    changePage (page: number): number;
}

const Pages = () => {
    const dispatch: Dispatch<any> = useDispatch(); 
    const pageState = useSelector(selectPage)

    const changePageButton = (action: string) => {
        
        //pageState er page tallet gjennom pageReducer
        if ( pageState === 1 && action === "prevPage"){
            dispatch(resetPage());
        }else if (action === "prevPage"){
            dispatch(prevPage());
        } else if (action === "nextPage"){
            dispatch(nextPage());
        }
        /*
        if (props.page === 1 && action === props.prevPage) {
                props.changePage(props.page)
    } else {
        action()
        props.changePage(props.page + increment)
    }*/

    }

    return(
        <div className="buttons">
          {/*  <p>Page: { pageState }</p>*/}
            <button color="success" onClick={() => changePageButton("prevPage" )} type="submit" value="PREV">PREV</button>
            <button color="success" onClick={() => changePageButton("nextPage")} type="submit" value="PREV">NEXT</button>
        </div>
    )


}

export default Pages;
/*
const mapStateToProps = (state: any) => ({
    page: state.PageReducer.page
})

const mapDispatchToProps = (dispatch: any) => {
    return {
        nextPage: () => dispatch(nextPage()),
        prevPage: () => dispatch(prevPage())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Pages);
*/