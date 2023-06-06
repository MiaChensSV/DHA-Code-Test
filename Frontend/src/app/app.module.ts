import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { ScoreCardComponent } from './components/score-card/score-card.component';
import { ButtonCardComponent } from './components/button-card/button-card.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionCardComponent,
    ScoreCardComponent,
    ButtonCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
