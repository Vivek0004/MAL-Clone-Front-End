import React, { Component } from 'react';
import './Home.css';
import { HomeProps } from '../../interfaces/HomeProps';
import { AnimeCarouselComponent } from './AnimeCarousel';
import { RecommendedAnimeComponent } from './RecommendedAnime';

export class Home extends Component<HomeProps, {}> {

    public render(): JSX.Element {

        return (
            <div className="home-container">
                <AnimeCarouselComponent title="In Progress Anime" animes={this.props.inProgressAnime} isLoading={this.props.isLoadingInProgressAnime} />
                <AnimeCarouselComponent title="Plan To Watch Anime" animes={this.props.planToWatchAnime} isLoading={this.props.isLoadingPlanToWatchAnime} />
                <AnimeCarouselComponent title="Completed Anime" animes={this.props.completedAnime} isLoading={this.props.isLoadingCompletedAnime} />
                <AnimeCarouselComponent title="On Hold Anime" animes={this.props.onHoldAnime} isLoading={this.props.isLoadingOnHoldAnime} />
                <AnimeCarouselComponent title="Dropped Anime" animes={this.props.droppedAnime} isLoading={this.props.isLoadingDroppedAnime} />
                <RecommendedAnimeComponent />
            </div>
        )
    }
}