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
            console.log(
                'loading error, check if backend is connected properly'
              );
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }

}

export default fetchDataReducer; 
