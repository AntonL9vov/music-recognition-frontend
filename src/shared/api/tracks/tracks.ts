import {api} from "../index.ts";

export const getTrack = async (title: string, artist: string) => {
    const response = await api.get('/track', {
        params: {
            title,
            artist
        }
    })

    return response.data
}

export const getPopularTracks = async () => {
    const response = await api.get('/tracks/popular')
    return response.data
}