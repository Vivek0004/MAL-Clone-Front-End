import React from 'react';
import './AnimeCarouselCard.css';
import { Link } from 'react-router-dom';

export function AnimeCarouselCard(props: any) {

    function stripCharactersFromTitle(title: string) {

        return title.replace(/\-|\_|\s/g, '-')
    }

    return (
        <div className="anime-carousel-card">
            <div className="overlay">
                <Link to={`/anime/${props.anime.mal_id}/${stripCharactersFromTitle(props.anime.title)}`}>
                    <img src={props.anime.image_url}
                        height="320" width="225"
                        title={props.anime.title} />
                </Link>
            </div>
            <span className="anime-name">{props.anime.title}</span>
        </div>
    );
}