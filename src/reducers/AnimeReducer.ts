import { AnimeActionTypes as aat } from '../actionTypes/AnimeActionTypes';
import { AnimeActions } from '../actions/AnimeActions';

export interface AnimeState {

    completedAnime: any[],
    inProgressAnime: any[],
    recommendedAnime: any[]

}

export const initialState: AnimeState = {

    completedAnime: [], 
    inProgressAnime: [],
    recommendedAnime: []

};

export function Anime(state: AnimeState = initialState, action: AnimeActions): any {

    switch(action.type) {

        case aat.ANIME_LOADED_SUCCESS: {

            const animeType: string = action.payload.type;
            const loadedAnime: any[] = action.payload.anime;

            if (animeType === "completed") {
                
                const anime = [...state.completedAnime, loadedAnime];
                return { ...state, anime };

            } else if (animeType === "inProgress") {

                const anime = [...state.inProgressAnime, loadedAnime];
                return { ...state, anime };

            } else if (animeType === "recommended") {

                const anime = [...state.recommendedAnime, loadedAnime];
                return { ...state, anime };
            }

        }

        default:
            return state;
    }

};