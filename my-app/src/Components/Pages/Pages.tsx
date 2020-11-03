import React from "react";
import { useDispatch, useSelector} from "react-redux";
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


const Pages = () => {
    const dispatch: Dispatch<any> = useDispatch(); 
    const pageState = useSelector((state: RootStore) => state.pageReducer.page);

    const changePageButton = (action: string) => {
        
        //pageState er page tallet gjennom pageReducer
        if ( (pageState === 0 && action === "prevPage") || action === "resetPage"){
            dispatch(resetPage());
        }else if (action === "prevPage"){
            dispatch(prevPage());
        } else if (action === "nextPage"){
            dispatch(nextPage());
        }

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
