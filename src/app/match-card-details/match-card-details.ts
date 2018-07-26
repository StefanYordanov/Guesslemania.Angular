export interface IMatchCardDetails {
    cardName: string;
    matches: IMatch[]
}

export interface IMatchSide{
    name: string;
    entries: IMatchEntry[];
    isPicked: boolean
}

export interface IMatchEntry{
    entryName: string;
    imageUrl: string;
}

export interface IMatch{
    isFilled: boolean;
    matchDescription: string;
    matchReward: string;
    isSidedMatch: boolean;
    matchSides?: IMatchSide[];
    options?: IMatchEntry[]
}

// export interface IRegularMatch extends IMatch{
//     isFilled: boolean;
//     matchDescription: string;
//     matchReward: string;
//     matchSides: IMatchSide[];

// }

// export interface IBattleRoyal extends IMatch{
//     isFilled: boolean;
//     matchDescription: string;
//     matchReward: string;
//     options: IMatchEntry[]
// }