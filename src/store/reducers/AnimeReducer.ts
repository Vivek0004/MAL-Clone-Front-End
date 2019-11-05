import { AnimeActionTypes as aat } from '../actionTypes/AnimeActionTypes';
import { AnimeLoadedSuccessAction, AnimeWatchingCategories } from '../actions/AnimeActions';

export interface AnimeState {

    isLoadingCompletedAnime: boolean;
    isLoadingDroppedAnime: boolean;
    isLoadingInProgressAnime: boolean;
    isLoadingOnHoldAnime: boolean;
    isLoadingPlanToWatchAnime: boolean;
    completedAnime: any[];
    droppedAnime: any[];
    inProgressAnime: any[];
    onHoldAnime: any[];
    planToWatchAnime: any[];
    recommendedAnime: any[];
    currentAnimeInformation: any;

}

export const initialState: AnimeState = {

    isLoadingCompletedAnime: false,
    isLoadingDroppedAnime: false,
    isLoadingInProgressAnime: false,
    isLoadingOnHoldAnime: false,
    isLoadingPlanToWatchAnime: false,
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

            const animeType: AnimeWatchingCategories = action.payload.loadedType;
            const loadedAnime: any[] = action.payload.anime;

            switch (animeType) {
                case 'completed':
                    const completedAnime = [...state.completedAnime, ...loadedAnime];
                    return { ...state, completedAnime };
                case 'dropped':
                    const droppedAnime = [...state.droppedAnime, ...loadedAnime];
                    return { ...state, droppedAnime };
                case 'inProgress':
                    const inProgressAnime = [...state.inProgressAnime, ...loadedAnime];
                    return { ...state, inProgressAnime };
                case 'onHold':
                    const onHoldAnime = [...state.onHoldAnime, ...loadedAnime];
                    return { ...state, onHoldAnime };
                case 'planToWatch':
                    const planToWatchAnime = [...state.planToWatchAnime, ...loadedAnime];
                    return { ...state, planToWatchAnime };
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