import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DateToString } from 'src/utilities/date-to-string.pipe';

import { AppComponent } from './app.component';
import { MatchCardsComponent } from './match-cards/match-cards.component';
import { MatchCardDetailsComponent } from './match-card-details/match-card-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchCardsComponent,
    MatchCardDetailsComponent,
    DateToString
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
