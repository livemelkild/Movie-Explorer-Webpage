import { Dispatch } from "redux";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { yearAsk, yearDesc, titleAsk, titleDesc } from "../../Action/Actions";
import { RootStore } from "../../store";

export const SearchSort = () => {
    const dispatch: Dispatch<any> = useDispatch();
    //ønsker å kalle på en funskjon som endrer state
    const callSortFunction = (action:any , number: string, type:string) => dispatch(action())
 
    return (
        <div className = "sort">
            <p>Sort</p>
            <button color="info" onClick={() => callSortFunction(titleAsk, "1", "Title")}>Title A-Z</button>
            <button color="info" onClick={() => callSortFunction(titleDesc, "-1", "Title")}>Title Z-A</button>
            <button color="info" onClick={() => callSortFunction(yearAsk, "-1", "Year")}>New - Old</button>
            <button color="info" onClick={() => callSortFunction(yearDesc, "1", "Year")}>Old - New</button>

        </div>
        )
    }

export default SearchSort;  