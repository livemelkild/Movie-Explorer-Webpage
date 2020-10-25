

export const FETCH_PENDING = "FETCH_PENDING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const SET_LOADING = "SET_LOADING";
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREV_PAGE = 'PREV_PAGE';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAIL = 'GET_DATA_FAIL';
export const SEARCH = "SEARCH";

export const YEAR_ASC = 'YEAR_ASC';
export const YEAR_DESC = 'YEAR_DESC';
export const TITLE_ASC = 'TITLE_ASC';
export const TITLE_DESC = 'TITLE_DESC';

export function fetchPending() {
    return {
        type: FETCH_PENDING
    }
}
export function fetchSuccess(fetch: any) {
    return {
        type: FETCH_SUCCESS,
        fetch: fetch
    }
}
export function fetchError(error: any) {
    return {
        type: FETCH_ERROR,
        error: error
    }
}

export function yearAsk() {
    return {
        type: YEAR_ASC,
    }
}
export function yearDesc() {
    return {
        type: YEAR_DESC,
    }
}
export function titleAsk() {
    return {
        type: TITLE_ASC,
    }
}
export function titleDesc() {
    return {
        type: TITLE_DESC,
    }
}

 export function searchInput(search: string) {
    return {
        type: 'SEARCH', 
        payload: search 
    } as const; 
}

export function setLoading(loading: boolean){
    return {
        type: 'SET_LOADING',
        payload:  { loading }
    }
}

export function nextPage() {
    return {
        type: 'NEXT_PAGE'
    }
}
export function prevPage() {
    return {
        type: 'PREV_PAGE'
    }
}

/*
export function fetchDataSuccess(res: any) {
    return{
        type: 'GET_DATA_SUCCESS',
        payload: res.DATA

    }
}
export function fetchDataFail() {
    return{
        type: 'GET_DATA_FAIL',
    }
}

export function fetchGetData() {
    const dispatch: Dispatch<any> = useDispatch();
    return () => 
    fetch("http://localhost:4000/api/character")
      .then(res => res.json()) 
      .then(res => {})
}
*/


export default {searchInput, setLoading, fetchPending, fetchSuccess, fetchError, yearAsk, yearDesc, titleAsk, titleDesc};


export type Actions = ReturnType <typeof searchInput>
 