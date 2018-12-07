import { AnimeActionTypes as aat } from '../actionTypes/AnimeActionTypes';
import { AnimeLoadedSuccessAction } from '../actions/AnimeActions';

export interface AnimeState {

    completedAnime: any[],
    droppedAnime: any[],
    inProgressAnime: any[],
    onHoldAnime: any[],
    planToWatchAnime: any[],
    recommendedAnime: any[],
    currentAnimeInformation: any

}

export const initialState: AnimeState = {

    completedAnime: [],
    droppedAnime: [],
    inProgressAnime: [],
    onHoldAnime: [],
    planToWatchAnime: [],
    recommendedAnime: [],
    currentAnimeInformation: {}

};

export function Anime(state: AnimeState = initialState, action: any): any {

    switch (action.type) {

        case aat.ANIME_LOADED_SUCCESS: {

            const animeType: string = action.payload.loadedType;
            const loadedAnime: any[] = action.payload.anime;

            if (animeType === "completed") {

                const completedAnime = [...state.completedAnime, ...loadedAnime];
                return { ...state, completedAnime };

            } else if (animeType === "dropped") {

                const droppedAnime = [ ...state.droppedAnime, ...loadedAnime ];
                return { ...state, droppedAnime };

            } else if (animeType === "inProgress") {

                const inProgressAnime = [...state.inProgressAnime, ...loadedAnime];
                return { ...state, inProgressAnime };

            } else if (animeType === "onHold") {

                const onHoldAnime = [ ...state.onHoldAnime, ...loadedAnime ];
                return { ...state, onHoldAnime };

            } else if (animeType === "planToWatch") {

                const planToWatchAnime = [ ...state.planToWatchAnime, ...loadedAnime ];
                return { ...state, planToWatchAnime };
                
            } else if (animeType === "recommended") {

                const anime = [...state.recommendedAnime, ...loadedAnime];
                return { ...state, anime };
            }

        }

        case aat.ANIME_INFORMATION_LOADED_SUCCESS: {

            const currentAnimeInformation: any = action.payload.information;
            return { ...state, currentAnimeInformation };
        }

        default:
            return state;
    }

};