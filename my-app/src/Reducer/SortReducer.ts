import { YEAR_ASC, YEAR_DESC, YEAR_RESET } from "../Action/Actions";

const initialState = {
    sortBy: 'Year',
    order: 0
}

interface SortState {
    sortBy: string,
    order: number
}

export default function sortReducer(state: SortState = initialState, action: { type: string }) {
    switch(action.type) {
        case YEAR_ASC:
            return {
                ...state,
                order: -1
            }
        case YEAR_DESC:
            return {
                ...state,
                order: 1
            }
        case YEAR_RESET:
            return {
                ...state,
                order: 0
            }
            default:
                return{
                    ...state
                }
        } 
      
    }

    export const selectOrder = (state: number) => state;
