import { Dispatch } from "redux";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { yearAsk, yearDesc, titleAsk, titleDesc, filterComedy, filterDrama, filterHorror, filterRomance, filterThriller  } from "../../Action/Actions";
import { RootStore } from "../../store";

export const SearchSort = () => {
    const dispatch: Dispatch<any> = useDispatch();
    //ønsker å kalle på en funskjon som endrer state
    const callSortFunction = (action:any , number: string, type:string) => dispatch(action())
          //ønsker å kalle på en funskjon som endrer state
          const [options, setOptions] = useState(false);

          const callFilterFunction = (action:any) => dispatch(action())

 
    return (
            <div>
                {options ?
                    <div className = "sort">
                    <p>Sort</p>
                        <button color="info" onClick={() => callSortFunction(titleAsk, "1", "Title")}>Title A-Z</button>
                        <button color="info" onClick={() => callSortFunction(titleDesc, "-1", "Title")}>Title Z-A</button>
                        <button color="info" onClick={() => callSortFunction(yearAsk, "-1", "Year")}>New - Old</button>
                        <button color="info" onClick={() => callSortFunction(yearDesc, "1", "Year")}>Old - New</button>
                        <br/>
                        <p>Filter</p>
                        <button color="info" onClick={() => callFilterFunction(filterComedy)}>Comedy</button>
                        <button color="info" onClick={() => callFilterFunction(filterDrama)}>Drama</button>
                        <button color="info" onClick={() => callFilterFunction(filterHorror)}>Horror</button>
                        <button color="info" onClick={() => callFilterFunction(filterRomance)}>Romance</button>
                        <button color="info" onClick={() => callFilterFunction(filterThriller)}>Thriller</button>
                        <br/>
                        <button onClick={() => setOptions(false) }>Hide filter</button>
                    </div>
                :
                    <div>
                    
                    <button onClick={() => setOptions(true)}>Show filter</button>
                </div> }
        </div>
        )
    }

export default SearchSort;  