import { Component, OnInit } from '@angular/core';
import { IMatchCard, MatchCardState } from './match-card';


@Component({
    selector: 'app-match-cards',
    templateUrl: './match-cards.component.html',
    styleUrls: ['./match-cards.component.css']
})
export class MatchCardsComponent implements OnInit {
    matchCards: IMatchCard[]
    constructor() { }

    ngOnInit() {
        this.matchCards = [
            {
                name: "Ruru Rules",
                imageUrls: ["https://scontent.fsof3-1.fna.fbcdn.net/v/t1.15752-9/36387684_1654451304592438_3486141258135502848_n.jpg?_nc_cat=0&oh=e95a5604921d4d3a18d2372649a27abd&oe=5BC8C00C"],
                deadLine: new Date(2018, 6, 15),
                state: MatchCardState.Unchecked
            },
            {
                name: "Cash in The Bank(КТБ)",
                imageUrls: ["https://scontent.fsof3-1.fna.fbcdn.net/v/t1.15752-9/34101036_1993413180731734_7613434800426188800_n.png?_nc_cat=0&oh=a7ec0d355c579f89281fe3d802e3ab26&oe=5BDDE923"],
                deadLine: new Date(2018, 6, 15),
                state: MatchCardState.Closed
            }
        ];
    }

    getButtonClassesByMatchCardState(state: MatchCardState){
        if(state === MatchCardState.Checked){
            return "green";
        }

        if(state === MatchCardState.Unchecked){
            return "red pulse";
        }

        if(state === MatchCardState.Closed){
            return "grey disabled";
        }
    }

    getButtonIconByMatchCardState(state: MatchCardState){
        if(state === MatchCardState.Checked){
            return "done_all";
        }

        if(state === MatchCardState.Unchecked){
            return "create";
        }

        if(state === MatchCardState.Closed){
            return "lock";
        }
    }

}
