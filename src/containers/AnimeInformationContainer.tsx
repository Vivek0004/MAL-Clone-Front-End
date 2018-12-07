import React, { Component } from 'react';
import { JikanService } from '../services/Jikan';
import { AnimeInformation } from '../components/AnimeInformation/AnimeInformation';
import { RouteComponentProps } from 'react-router-dom';
import { AnimeInformationLoadedSuccessAction } from '../store/actions/AnimeActions';
import { AnimeInformationContainerProps } from '../interfaces/AnimeInformationProps';
import { connect } from 'react-redux';

class AnimeInformationContainer 
extends Component<RouteComponentProps<{ id: string, name: string }> & AnimeInformationContainerProps, {}> {

    public componentDidMount(): void {

        const animeId: number = parseInt(this.props.match.params.id);
        const jikan: JikanService = new JikanService();
        jikan.getAnimeInformation(animeId)
            .then((res: any) => this.props.dispatch(new AnimeInformationLoadedSuccessAction({ information: res })));
    }

    public render(): JSX.Element {

        return (
            <AnimeInformation information={this.props.currentAnimeInformation}></AnimeInformation>
        );
    }
}

const mapStateToProps = (state: any) => ({
    ...state.Anime
});

export const AnimeInformationContainerComponent = connect(
    mapStateToProps
)(AnimeInformationContainer);