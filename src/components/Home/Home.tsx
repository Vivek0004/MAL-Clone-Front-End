import React, { Component} from 'react';
import './Home.css';
import { HomeContainerProps } from '../../interfaces/HomeContainerProps';
import { AnimeCarouselComponent } from './AnimeCarousel';
import { RecommendedAnimeComponent } from './RecommendedAnime';

export class Home extends Component<HomeContainerProps, {}> {
 
    public render(): JSX.Element {

        return (
            <div className="home-container">
                <AnimeCarouselComponent title="Watching Animes" animes={this.props.inProgressAnime} />
                <AnimeCarouselComponent title="Completed Animes" animes={this.props.completedAnime} />
                <RecommendedAnimeComponent />
            </div>
        )
    }
}