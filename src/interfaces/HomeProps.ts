export interface HomeProps {
    isLoadingCompletedAnime: boolean;
    isLoadingDroppedAnime: boolean;
    isLoadingInProgressAnime: boolean;
    isLoadingOnHoldAnime: boolean;
    isLoadingPlanToWatchAnime: boolean;
    completedAnime: any[];
    droppedAnime: any[];
    inProgressAnime: any[];
    onHoldAnime: any[];
    planToWatchAnime: any[];
}