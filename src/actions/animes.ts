export class AnimesAreLoadingAction {

    public type: string = "ANIMES_ARE_LOADING";
    public isLoading: boolean = false;

    constructor(isLoading: boolean) {

        this.isLoading = isLoading;
    }
}

export class AnimesLoadedSuccessAction {

    public type: string = "ANIMES_LOADED_SUCCESS";
    public animes: any[];

    constructor(animes: any[]) {

        this.animes = animes;
    }
}