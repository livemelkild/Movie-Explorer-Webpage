export const SEARCH_ARTIST = "SEARCH_ARTIST"

export function searchArtist(search: string) {
    return {
        type: 'SEARCH_ARTIST', 
        payload: search 
    } as const; 

}

type Actions = ReturnType <typeof searchArtist>

