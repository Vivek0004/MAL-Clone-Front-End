import React, { Component } from 'react';
import './AnimeInformation';

export class AnimeInformation extends Component<{ information: any }, {}> {

    public render(): JSX.Element {
        console.log(this.props.information)
        return (
            <div>
                This is the Anime Information component.
            </div>
        );

    }
}