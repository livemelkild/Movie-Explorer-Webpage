export const SEARCH_ARTIST = "SEARCH_ARTIST";

type SearchArtist = "SEARCH_ARTIST";
//const searchArtist: SearchArtist = "SEARCH_ARTIST";

 function searchArtist(search: string) {
    return {
        type: 'SEARCH_ARTIST', 
        payload: search 
    } as const; 

}

export default searchArtist;

export type Actions = ReturnType <typeof searchArtist>
 