import React, { Component } from 'react';
import './AnimeInformation';
import { RouteProps } from 'react-router';

interface IAnimeInformationProps {

    match: {
        params: {
            id: string,
            name: string
        }
    }

}

export class AnimeInformation extends Component<IAnimeInformationProps & RouteProps, {}> {

    public componentDidMount(): void {
        
    }

    public render(): JSX.Element {

        return (
            <div>
                This is the Anime Information component.
            </div>
        );

    }
}