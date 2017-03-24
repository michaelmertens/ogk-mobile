import { News } from '../pages/news/news';
import { EightBall, SingYourSong } from '../games/games.module';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page2 } from '../pages/page2/page2';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = News;

  pages: Array<{title: string, component: any}>;
  games: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'News', component: News },
      { title: 'Voting', component: Page2 }
    ];

    // used for an example of ngFor and navigation
    this.games = [
      { title: 'Eight Ball', component: EightBall },
      { title: 'Sing your Song', component: SingYourSong }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
