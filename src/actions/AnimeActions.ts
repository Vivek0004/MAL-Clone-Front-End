import { AnimeActionTypes } from '../actionTypes/AnimeActionTypes';
import { Action } from '../types/Action';

export class AnimeLoadingAction implements Action {

    public type: string = AnimeActionTypes.ANIME_LOADING;

    constructor(public payload: any) {

    }
}

export class AnimeLoadedSuccessAction implements Action {

    public type: string = AnimeActionTypes.ANIME_LOADED_SUCCESS;

    constructor(public payload: any) {

    }
}

export type AnimeActions = 
AnimeLoadingAction |
AnimeLoadedSuccessAction;

