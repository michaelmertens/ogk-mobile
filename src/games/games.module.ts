import { ServicesModule } from '../services/services.module';
import { IonicModule } from 'ionic-angular';
import { EightBall } from './eight-ball/eight-ball';
import { SingYourSong } from './sing-your-song/sing-your-song';
import { NgModule } from '@angular/core';
import { WidgetsModule } from "../widgets/widgets.module";

@NgModule({
    declarations: [
        SingYourSong, 
        EightBall
    ],
    imports: [
        ServicesModule.forRoot(), 
        WidgetsModule, 
        IonicModule
    ],
    exports: [SingYourSong, EightBall]
})
export class GamesModule {}

export {
    EightBall,
    SingYourSong
}