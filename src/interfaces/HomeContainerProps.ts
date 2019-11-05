export interface HomeContainerProps {
    isLoadingCompletedAnime: boolean;
    isLoadingDroppedAnime: boolean;
    isLoadingInProgressAnime: boolean;
    isLoadingOnHoldAnime: boolean;
    isLoadingPlanToWatchAnime: boolean;
    completedAnime: any[];
    inProgressAnime: any[];
    droppedAnime: any[];
    onHoldAnime: any[];
    planToWatchAnime: any[];
    dispatch: Function;
}