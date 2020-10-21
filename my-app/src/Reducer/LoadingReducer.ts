import {Actions} from '../Action/Actions'; 

const initialState = { 
    loading: false
}
interface LoadingState {
    loading: boolean
}

export function loadingReducer(state: LoadingState = initialState, action: { type: string, payload: any }) {
    switch(action.type) {
        case 'SET_LOADING' :
            return {
                loading: action.payload
            }
        default:
            return state
           
    }
}

export default loadingReducer; 