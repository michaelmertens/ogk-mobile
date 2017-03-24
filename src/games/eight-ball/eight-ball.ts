import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'ogk-eight-ball',
  templateUrl: 'eight-ball.html'
})
export class EightBall {
  public currentAnswer: string;
  private answerCollection: Array<{text: string}>;

  constructor(public navCtrl: NavController) {
    
    // used for an example of ngFor and navigation
    this.answerCollection = [
      { text: 'Yes' },
      { text: 'No' },
      { text: 'No way!' },
      { text: 'Maybe tonight' },
      { text: 'Almost certainly' },
      { text: 'How should I know?' },
      { text: 'Zijt gij da jekke?!' }
    ];
  }

  public shakeBall(): void {
    let randomIdx = Math.floor(Math.random() * (this.answerCollection.length));
    this.currentAnswer = this.answerCollection[randomIdx].text;
    console.log("currentAnswer is now " + this.currentAnswer);
  }
}
