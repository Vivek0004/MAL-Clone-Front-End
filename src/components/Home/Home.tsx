import React, { Component} from 'react';
import './Home.css';

import { AnimeCarouselComponent } from './AnimeCarousel';
import { RecommendedAnimeComponent } from './RecommendedAnime';

import { JikanService } from '../../services/Jikan';

interface IHomeComponentState {
    completedAnimes: any[],
    watchingAnimes: any[]
}

export class Home extends Component<{}, IHomeComponentState> {

    constructor(props: any) {
        super(props);
        this.state = {
            completedAnimes: [],
            watchingAnimes: []
        };
    }

    public async componentWillMount() {
        
        const js = new JikanService();
        const watchingAnimes = (await js.getUserWatchingAnime()).anime;
        const completedAnimes = (await js.getUserCompletedAnime()).anime;

        this.setState({
            completedAnimes,
            watchingAnimes
        });
    }
 
    public render(): JSX.Element {

        return (
            <div className="home-container">
                <AnimeCarouselComponent title="Watching Animes" animes={this.state.watchingAnimes} />
                <AnimeCarouselComponent title="Completed Animes" animes={this.state.completedAnimes} />
                <RecommendedAnimeComponent />
            </div>
        )
    }
}