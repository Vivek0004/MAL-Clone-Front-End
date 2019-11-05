import { AnimeActionTypes } from '../actionTypes/AnimeActionTypes';
import { Action } from '../../interfaces/Action';

export type AnimeWatchingCategories = 'completed' | 'dropped' | 'inProgress' | 'onHold' | 'planToWatch';

export class AnimeLoadingAction implements Action {
    public type: string = AnimeActionTypes.ANIME_LOADING;

    constructor(private payload: { type: AnimeWatchingCategories }) {
    }
}

export class AnimeLoadedSuccessAction implements Action {
    public type: string = AnimeActionTypes.ANIME_LOADED_SUCCESS;

    constructor(private payload: { anime: any[], loadedType: AnimeWatchingCategories }) {
    }
}

export class AnimeInformationLoadedSuccessAction implements Action {
    public type: string = AnimeActionTypes.ANIME_INFORMATION_LOADED_SUCCESS;

    constructor(private payload: { information: any }) {
    }
}

export class GoToAnimeAction implements Action {
    public type: string = AnimeActionTypes.GO_TO_ANIME;

    constructor(public anime: any) {

    }
}