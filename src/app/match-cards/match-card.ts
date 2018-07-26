export interface IMatchCard{
    name: string;
    imageUrls: [string],
    deadLine: Date,
    state: MatchCardState

}

export enum MatchCardState {
    Closed,
    Checked,
    Unchecked
}