import { FETCH_PENDING, FETCH_SUCCESS, FETCH_ERROR } from "../Action/Actions";

const initialState = {
    pending: false,
    fetch: [],
    error: null
}
interface FetchState {
    pending: boolean,
    fetch: string[],
    error: any
}

export function fetchDataReducer(state: FetchState = initialState, action: { type: string, payload: any, error: any }) {
    switch(action.type){
        case FETCH_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_SUCCESS:
            return{
                ...state,
                fetch: action.payload
            }
        case FETCH_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }

}

export default fetchDataReducer; 


/*
import { SEARCH } from "../Action/Types";

const initialState = { 
    fetch: false
}
interface SearchState {
    fetch: boolean
}

export function fetchDataReducer(state: SearchState = initialState, action: { type: string, payload: any, res: any }) {
    switch(action.type) {
        case SEARCH :
            return {
                fetch: action.payload
            }
        default:
            return state
           
    }
}

export default fetchDataReducer; 

*/