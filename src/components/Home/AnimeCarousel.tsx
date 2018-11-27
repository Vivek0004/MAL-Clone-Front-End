import React, { Component } from 'react';
import './AnimeCarousel.css';

import { AnimeCarouselCard } from './AnimeCarouselCard';

interface IAnimeCarouselComponentProps {
    title: string,
    animes: any[]
}

export class AnimeCarouselComponent extends Component<IAnimeCarouselComponentProps> {

    public render(): JSX.Element {

        const animeItems: JSX.Element[] = this.props.animes.map(obj => {

            return (
                <li key={obj.mal_id}>
                    <AnimeCarouselCard anime={obj} />
                </li>
            );

        });

        return (
            <div>
                <h2 className="title">{this.props.title}</h2>
                <ul className="anime-carousel">
                    {animeItems.length ? animeItems : "No animes under this category."}
                </ul>
            </div>
        )
    }
}