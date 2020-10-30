import { Dispatch } from "redux";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { yearAsk, yearDesc, yearReset, filterComedy, filterDrama, filterHorror, filterRomance, filterThriller  } from "../../Action/Actions";

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
                        <button className="waves-effect btn teal darken-4" type="submit" name="action" onClick={() => setOptions(false) }>Hide filter</button>
                    <p>Sort</p>
                        <button className="waves-effect btn" type="submit" name="action" onClick={() => callSortFunction(yearAsk)}>New - Old</button>
                        <button className="waves-effect btn" type="submit" name="action" onClick={() => callSortFunction(yearDesc)}>Old - New</button>
                        <button className="waves-effect btn" type="submit" name="action" onClick={() => callSortFunction(yearReset)}>Unorderd</button>

                        <br/>
                        <p>Filter</p>
                        <button className="waves-effect btn light-blue accent-4" type="submit" name="action" onClick={() => callFilterFunction(filterComedy)}>Comedy</button>
                        <button className="waves-effect btn light-blue accent-4" type="submit" name="action" onClick={() => callFilterFunction(filterDrama)}>Drama</button>
                        <button className="waves-effect btn light-blue accent-4" type="submit" name="action" onClick={() => callFilterFunction(filterHorror)}>Horror</button>
                        <button className="waves-effect btn light-blue accent-4" type="submit" name="action" onClick={() => callFilterFunction(filterRomance)}>Romance</button>
                        <button className="waves-effect btn light-blue accent-4" type="submit" name="action" onClick={() => callFilterFunction(filterThriller)}>Thriller</button>
                        <br/>
                    </div>
                :
                    <div>
                    
                    <button className="waves-effect btn teal darken-4" type="submit" name="action" onClick={() => setOptions(true)}>Show filter</button>
                </div> }
        </div>
        )
    }

export default SearchSort;  