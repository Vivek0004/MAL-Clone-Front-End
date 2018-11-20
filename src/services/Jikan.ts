import * as Jikan from 'jikanjs';

export class JikanService {
    private jikan: any;

    constructor() {
        this.jikan = Jikan;
    }

    public async getUserCompletedAnime(): Promise<any> {

        return await this.jikan.loadUser('itsnick320o', 'animelist', 'completed');
    }

    public async getUserWatchingAnime(): Promise<any> {

        return await this.jikan.loadUser('itsnick320o', 'animelist', 'watching');
    }
} 