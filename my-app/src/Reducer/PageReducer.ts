import React from "react";
import { NEXT_PAGE, PREV_PAGE, RESET_PAGE } from "../Action/Actions";

const initialState = {
    page: 1
};

interface PageState {
    page: number;
}

export default function pageReducer(state: PageState = initialState, action: {type: string}):PageState {
        switch (action.type){
            case NEXT_PAGE:
                return{
                    ...state,
                    page: state.page + 1
                }
            case PREV_PAGE:
                return{
                    ...state,
                    page: state.page - 1
                }
            case RESET_PAGE:
                return{
                    ...state,
                    page: 1
                }
            default:
                return{
                    ...state
                }
        }
}

export const selectPage = (state: number) => state;