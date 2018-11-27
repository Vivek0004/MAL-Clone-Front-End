import React, { Component } from 'react';
import './AnimeInformation.css';

export class AnimeInformation extends Component<{ information: any }, {}> {

    public render(): JSX.Element {
        console.log(this.props.information)

        if (!Object.keys(this.props.information).length) {
            return <span>Loading..</span>
        }

        const title: string = this.props.information.title;
        const image_url: string = this.props.information.image_url;
        const synopsis: string = this.props.information.synopsis;
        const background: string = this.props.information.background;
        const relatedAnime: JSX.Element[] = this.getRelatedAnime(this.props.information.related);
        const titleEnglish: string = this.props.information.title_english;
        const titleJapanese: string = this.props.information.title_english;
        const type: string = this.props.information.type;
        const episodes: string = this.props.information.episodes;
        const status: string = this.props.information.status;
        const aired: string = this.props.information.aired.string;
        const premiered: string = this.props.information.premiered;
        const producers: JSX.Element = this.createList(this.props.information.producers);
        const licensors: JSX.Element = this.createList(this.props.information.licensors);
        const studios: JSX.Element = this.createList(this.props.information.studios);
        const source: string = this.props.information.source;
        const genres: JSX.Element = this.createList(this.props.information.genres);
        const duration: string = this.props.information.duration;
        const rating: string = this.props.information.rating;

        return (
            <div className="anime-information">
                <h2 className="title">{title}</h2>
                <div className="container">

                    <div className="information-container">

                        <div className="image-container"><img src={image_url} /></div>

                        <h3 className="section-header">Alternate Titles</h3>
                        <ul>
                            <li><span className="bold">English: </span>{titleEnglish}</li>
                            <li><span className="bold">Japanese: </span>{titleJapanese}</li>
                        </ul>

                        <h3 className="section-header">Information</h3>
                        <ul>
                            <li><span className="bold">Type: </span>{type}</li>
                            <li><span className="bold">Episodes: </span>{episodes}</li>
                            <li><span className="bold">Status: </span>{status}</li>
                            <li><span className="bold">Aired: </span>{aired}</li>
                            <li><span className="bold">Premiered: </span>{premiered}</li>
                            <li><span className="bold">Producers: </span>{producers}</li>
                            <li><span className="bold">Licensors: </span>{licensors}</li>
                            <li><span className="bold">Studios: </span>{studios}</li>
                            <li><span className="bold">Source: </span>{source}</li>
                            <li><span className="bold">Genres: </span>{genres}</li>
                            <li><span className="bold">Duration: </span>{duration}</li>
                            <li><span className="bold">Rating: </span>{rating}</li>
                        </ul>
                    </div>

                    <div className="content-container">

                        <h3 className="section-header">Synopsis</h3>
                        {synopsis}

                        <h3 className="section-header">Background</h3>
                        {background ? background : 'No background information exists.'}

                        <h3 className="section-header">Related Anime</h3>
                        <ul className="related-anime">
                            {relatedAnime}
                        </ul>

                    </div>
                </div>
            </div>
        );

    }

    private createList(arr: any[] = [], className?: string): JSX.Element {

        let list: JSX.Element[] = [];

        arr.forEach((obj: any, idx: number) => {

            const name: string = obj.name;
            const url: string = obj.url;
            const mal_id: string = obj.mal_id;

            const el: JSX.Element = (
                <li key={mal_id}>
                    <a className="bold-pink" href={url}>{name}</a>
                    {idx === arr.length - 1 ? "" : ","}
                </li>
            );

            list.push(el);
        });

        return (
            <ul className={className ? className : ""}>
                {list}
            </ul>
        );
    }

    private getRelatedAnime(relatedAnime: any): JSX.Element[] {

        let related: JSX.Element[] = [];
        const className: string = "related-anime-category";

        for (let key in relatedAnime) {

            const categoryArray: JSX.Element[] = relatedAnime[key];
            let list: JSX.Element = this.createList(categoryArray, className);

            const categoryList: JSX.Element = (
                <div key={key}>
                    {key}: {list}
                </div>
            );

            related.push(categoryList);
        }

        return related;
    }
}