import { AnimeActionTypes as aat } from '../actionTypes/AnimeActionTypes';
import { AnimeLoadedSuccessAction } from '../actions/AnimeActions';

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

export function Anime(state: AnimeState = initialState, action: any): any {

    switch (action.type) {

        case aat.ANIME_LOADED_SUCCESS: {

            const animeType: string = action.payload.loadedType;
            const loadedAnime: any[] = action.payload.anime;

            if (animeType === "completed") {

                const completedAnime = [...state.completedAnime, ...loadedAnime];console.log(state.completedAnime, loadedAnime)
                return { ...state, completedAnime };

            } else if (animeType === "inProgress") {

                const inProgressAnime = [...state.inProgressAnime, ...loadedAnime];
                return { ...state, inProgressAnime };

            } else if (animeType === "recommended") {

                const anime = [...state.recommendedAnime, ...loadedAnime];
                return { ...state, anime };
            }

        }

        default:
            return state;
    }

};