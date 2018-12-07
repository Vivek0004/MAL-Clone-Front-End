import React, { Component} from 'react';
import './Home.css';
import { HomeProps } from '../../interfaces/HomeProps';
import { AnimeCarouselComponent } from './AnimeCarousel';
import { RecommendedAnimeComponent } from './RecommendedAnime';

export class Home extends Component<HomeProps, {}> {
 
    public render(): JSX.Element {

        return (
            <div className="home-container">
                <AnimeCarouselComponent title="In Progress Anime" animes={this.props.inProgressAnime} />
                <AnimeCarouselComponent title="Plan To Watch Anime" animes={this.props.planToWatchAnime} />
                <AnimeCarouselComponent title="Completed Anime" animes={this.props.completedAnime} />
                <AnimeCarouselComponent title="On Hold Anime" animes={this.props.onHoldAnime} />
                <AnimeCarouselComponent title="Dropped Anime" animes={this.props.droppedAnime} />
                <RecommendedAnimeComponent />
            </div>
        )
    }
}