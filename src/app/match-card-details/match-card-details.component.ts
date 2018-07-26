import { Component, OnInit } from '@angular/core';
import { IMatchCardDetails, IMatch, IMatchSide, } from './match-card-details';

@Component({
    selector: 'app-match-card-details',
    templateUrl: './match-card-details.component.html',
    styleUrls: ['./match-card-details.component.css']
})
export class MatchCardDetailsComponent implements OnInit {

    matchCard: IMatchCardDetails;
    showImageCards:boolean = true;
    constructor() { }

    ngOnInit() {
        this.matchCard = {
            cardName: "Cash in The Bank(КТБ)",
            matches: [
                {
                    isFilled: false,
                    matchDescription: "Мокър сън на Винс",
                    matchReward: "",
                    isSidedMatch: true,
                    matchSides: [
                        {
                            name: "Едър потен самоанец",
                            entries: [
                                { entryName: "Roman Reigns", imageUrl: "http://www.profightdb.com/img/wrestlers/thumbs-600/1a333eed66roman-reigns.jpeg" }
                            ],
                            isPicked: true
                        },
                        {
                            name: "Едър потен мангал",
                            entries: [
                                { entryName: "Jinder Mahal", imageUrl: "https://i2.wp.com/sportnewswale.com/wp-content/uploads/2018/04/Screenshot_20180427_095607.png" }
                            ],
                            isPicked: false
                        }
                    ]
                },

                {
                    isFilled: false,
                    matchDescription: "Мъжки куфар",
                    matchReward: "",
                    isSidedMatch: true,
                    matchSides: [
                        {
                            name: "БРООООООН!!!",
                            entries: [
                                { entryName: "Braun Strowman", imageUrl: "https://www.wwe.com/f/styles/gallery_img_l/public/all/2017/12/106_RAW_12042017hm_1582--9e71e31cf0d92a960a0342692660311b.jpg" }
                            ],
                            isPicked: true
                        },
                        {
                            name: "Glorified Jobber",
                            entries: [
                                { entryName: "Bobby Roode", imageUrl: "https://m.media-amazon.com/images/M/MV5BNjAxMGZhNzktNGQ1OS00N2VmLWFlMTktN2FlOTIzYmI0NDFlXkEyXkFqcGdeQXVyNTM5NjkxMzM@._V1_SY1000_SX1000_AL_.jpg" }
                            ],
                            isPicked: false
                        },
                        {
                            name: "Усмихнато ирландско момченце",
                            entries: [
                                { entryName: "Finn Balor", imageUrl: "https://i1.wp.com/givemesport.azureedge.net/images/17/11/23/d4b509df8047b9dfa24165f247f6020e/960.jpg?resize=450%2C450&crop=1" }
                            ],
                            isPicked: false
                        },
                        {
                            name: "Run Forest! Run!",
                            entries: [
                                { entryName: "Kevin Owens", imageUrl: "http://www.bodyslam.net/wp-content/uploads/2018/02/KevinOwens.jpg" }
                            ],
                            isPicked: false
                        },
                        {
                            name: "Някой произволен черен",
                            entries: [
                                { entryName: "New Day", imageUrl: "https://www.wwe.com/f/styles/gallery_img_l/public/all/2018/01/069_SD_01232018ej_2090--44f55017b3877b73e11d7ad17fe423bb.jpg" }
                            ],
                            isPicked: false
                        },
                        {
                            name: "RUSEV DAYYYYYYY!!!",
                            entries: [
                                { entryName: "Rusev", imageUrl: "https://www.wwe.com/f/styles/gallery_img_l/public/all/2018/02/002_MMC_02132018hm_0046--832f6dd32492afdbe74e948f1bb6237f.jpg" }
                            ],
                            isPicked: false
                        },
                        {
                            name: "Самоанецът, ама не този на Винс",
                            entries: [
                                { entryName: "Samoa Joe", imageUrl: "http://www.bodyslam.net/wp-content/uploads/2018/01/Samoa-Joe1.jpg" }
                            ],
                            isPicked: false
                        },
                        {
                            name: "МизЪТ",
                            entries: [
                                { entryName: "The Miz", imageUrl: "https://www.fite.tv/thumbs/s3/ims-thumbs/fighters_images/The_Miz/xThe_Miz.jpg.pagespeed.ic.-hPthJRKCD.jpg" }
                            ],
                            isPicked: false
                        }
                    ]
                }
            ]
        };
    }
    changeSelectedOption(match: IMatch, side: IMatchSide) {
        for (let side of match.matchSides) {
            side.isPicked = false;
        }

        side.isPicked = true;
    }

    toggleShowImageCards(){
        this.showImageCards = !this.showImageCards;
    }
    // instanceOfIRegularMatch(object: any): object is IRegularMatch {
    //     return 'sides' in object;
    // }

    // castToIRegularMatch(match : IMatch) : IRegularMatch{
    //     return match as IRegularMatch;
    // }

    // castToIBattleRoyal(match : IMatch) : IBattleRoyal{
    //     return match as IBattleRoyal;
    // }
}
