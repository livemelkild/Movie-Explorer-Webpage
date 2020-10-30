import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { useDispatch, useSelector} from "react-redux";
import { selectPage } from "../../Reducer/PageReducer";
import { Dispatch } from "redux";
import { RootStore } from "../../store";

import { nextPage, prevPage, resetPage } from '../../Action/Actions'
import "./Pages.css"

interface iProps{
    page: number;
    prevPage: string;
    nextPage: string;
    resetPage: string;
    changePage (page: number): number;
}

/*
      const searchState = useSelector((state: RootStore) => state.searchReducer.search);
      const [search, setSearch] = useState(searchState);
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value);
*/
const Pages = () => {
    const dispatch: Dispatch<any> = useDispatch(); 
    const pageState = useSelector((state: RootStore) => state.pageReducer.page);

    const changePageButton = (action: string) => {
        
        //pageState er page tallet gjennom pageReducer
        if ( pageState === 0 && action === "prevPage" || action === "resetPage"){
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
            <button className="waves-effect btn" type="submit" name="action"  color="success" onClick={() => changePageButton("prevPage" )} value="PREV">PREV</button>
            <button className="waves-effect btn" type="submit" name="action"  color="success" onClick={() => changePageButton("resetPage")} value="PREV">RESET</button>
            <button className="waves-effect btn" type="submit" name="action"  color="success" onClick={() => changePageButton("nextPage")}  value="PREV">NEXT</button>
            

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