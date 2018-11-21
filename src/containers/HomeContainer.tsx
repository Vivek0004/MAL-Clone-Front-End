import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Home } from '../components/Home/Home';
import { GoToAnimeAction, AnimeLoadedSuccessAction } from '../actions/AnimeActions';
import { HomeContainerProps } from '../interfaces/HomeContainerProps';
import { JikanService } from '../services/Jikan';

class HomeContainer extends Component<HomeContainerProps, {}> {

    public componentDidMount(): void {

        const jikan = new JikanService();

        jikan.getUserCompletedAnime()
            .then((resp: any) => {
                const anime: any[] = resp.anime;
                this.props.dispatch({ ...new AnimeLoadedSuccessAction({ anime, loadedType: "completed" }) });
            });
        jikan.getUserWatchingAnime().
            then((resp: any) => {
                const anime: any[] = resp.anime;
                this.props.dispatch(new AnimeLoadedSuccessAction({ anime, loadedType: "inProgress" }));
            });
    }

    public render(): JSX.Element {

        return (
            <Home
                inProgressAnime={this.props.inProgressAnime}
                completedAnime={this.props.completedAnime}
            />
        );
    }
}

const mapStateToProps = (state: any) => ({
    ...state.Anime
});

const mapDispatchToProps = (dispatch: Function) => ({
    GoToAnime: (id: string) => dispatch(new GoToAnimeAction(id))
});

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(HomeContainer);