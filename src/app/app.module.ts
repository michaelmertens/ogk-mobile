import { ToolsModule, ChineseVolunteer } from "../tools/tools.module";
import { WidgetsModule } from '../widgets/widgets.module';
import { ServicesModule } from '../services/services.module';
import { GamesModule, EightBall, SingYourSong } from '../games/games.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page2 } from '../pages/page2/page2';
import { News } from '../pages/news/news';

@NgModule({
  declarations: [
    MyApp,
    News,
    Page2
  ],
  imports: [
    WidgetsModule,
    GamesModule,
    ToolsModule,
    ServicesModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    News,
    Page2,
    EightBall,
    SingYourSong,
    ChineseVolunteer
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
