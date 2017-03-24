import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'ogk-news',
  templateUrl: 'news.html'
})
export class News {

  newsStories: Array<{title: string, content: any}>;

  constructor(public navCtrl: NavController) {
    this.newsStories = [
      { title: "Eerste nieuws op onze nieuwe app!", content: "Dit is geweldig." },
      { title: "Bestemming eerste weekend ligt vast!", content: "Kijken jullie er ook al naar uit?" }
    ];
  }

}