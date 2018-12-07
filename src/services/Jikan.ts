import * as Jikan from 'jikanjs';

export class JikanService {
    private jikan: any;

    constructor() {
        this.jikan = Jikan;
    }

    public getAnimeInformation(id: number): Promise<any> {

        return this.jikan.loadAnime(id);
    }

    public async getUserCompletedAnime(): Promise<any> {

        return await this.jikan.loadUser('itsnick320o', 'animelist', 'completed');
    }

    public getUserDroppedAnime(): Promise<any> {

        return this.jikan.loadUser('itsnick320o', 'animelist', 'dropped');
    }

    public getUserOnHoldAnime(): Promise<any> {

        return this.jikan.loadUser('itsnick320o', 'animelist', 'onhold');
    }

    public getUserPlanToWatchAnime(): Promise<any> {

        return this.jikan.loadUser('itsnick320o', 'animelist', 'plantowatch');
    }

    public async getUserWatchingAnime(): Promise<any> {

        return await this.jikan.loadUser('itsnick320o', 'animelist', 'watching');
    }

} 