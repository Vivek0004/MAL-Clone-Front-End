import { AnimeActionTypes } from '../actionTypes/AnimeActionTypes';
import { Action } from '../../interfaces/Action';

export class AnimeLoadingAction implements Action {
    public type: string = AnimeActionTypes.ANIME_LOADING;

    constructor(public isLoading: boolean) {

    }
}

export class AnimeLoadedSuccessAction implements Action {
    public type: string = AnimeActionTypes.ANIME_LOADED_SUCCESS;
    public payload: any;
    
    constructor(payload: { anime: any[], loadedType: string }) {
        this.payload = payload;
    }
}

export class AnimeInformationLoadedSuccessAction implements Action {
    public type: string = AnimeActionTypes.ANIME_INFORMATION_LOADED_SUCCESS;
    public payload: any;

    constructor(payload: { information: any }) {
        this.payload = payload;
    }
}

export class GoToAnimeAction implements Action {
    public type: string = AnimeActionTypes.GO_TO_ANIME;
    
    constructor(public anime: any) {

    }
}