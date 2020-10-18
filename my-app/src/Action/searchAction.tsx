export const SEARCH_ARTIST = "SEARCH_ARTIST"

export function searchArtist(search: string) {
    return {
        type: 'SEARCH_ARTIST', 
        payload: search 
    } as const; 

}

/*export const searchValue = (search) => {
    return {
        type: search
        payload: search
    }
}^*/

export type Actions = ReturnType <typeof searchArtist>

export default searchArtist; 