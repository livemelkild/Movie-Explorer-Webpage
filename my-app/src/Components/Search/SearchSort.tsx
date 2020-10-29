import { Dispatch } from "redux";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { yearAsk, yearDesc, yearReset, filterComedy, filterDrama, filterHorror, filterRomance, filterThriller  } from "../../Action/Actions";
import { RootStore } from "../../store";

export const SearchSort = () => {
    const dispatch: Dispatch<any> = useDispatch();
    //ønsker å kalle på en funskjon som endrer state
    const callSortFunction = (action:any) => dispatch(action())

          //ønsker å kalle på en funskjon som endrer state
    const [options, setOptions] = useState(false);

    const callFilterFunction = (action:any) => dispatch(action())

 
    return (
            <div>
                {options ?
                    <div className = "sort">
                    <p>Sort</p>
                        <button onClick={() => callSortFunction(yearAsk)}>New - Old</button>
                        <button onClick={() => callSortFunction(yearDesc)}>Old - New</button>
                        <button onClick={() => callSortFunction(yearReset)}>Unorderd</button>

                        <br/>
                        <p>Filter</p>
                        <button onClick={() => callFilterFunction(filterComedy)}>Comedy</button>
                        <button onClick={() => callFilterFunction(filterDrama)}>Drama</button>
                        <button onClick={() => callFilterFunction(filterHorror)}>Horror</button>
                        <button onClick={() => callFilterFunction(filterRomance)}>Romance</button>
                        <button onClick={() => callFilterFunction(filterThriller)}>Thriller</button>
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