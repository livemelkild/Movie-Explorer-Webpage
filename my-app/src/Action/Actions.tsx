
export const SEARCH_ARTIST = "SEARCH_ARTIST";
export const SET_LOADING = "SET_LOADING";

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

export default {searchArtist, setLoading};


export type Actions = ReturnType <typeof searchArtist>
 