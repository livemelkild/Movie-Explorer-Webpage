
export const SEARCH_ARTIST = "SEARCH_ARTIST";
export const SET_LOADING = "SET_LOADING";
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREV_PAGE = 'PREV_PAGE';

type SearchArtist = "SEARCH_ARTIST";
//const searchArtist: SearchArtist = "SEARCH_ARTIST";

 export function searchArtist(search: string) {
    return {
        type: 'SEARCH_ARTIST', 
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

export default {searchArtist, setLoading};


export type Actions = ReturnType <typeof searchArtist>
 