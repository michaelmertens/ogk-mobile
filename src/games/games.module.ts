import { ServicesModule } from '../services/services.module';
import { IonicModule } from 'ionic-angular';
import { EightBall } from './eight-ball/eight-ball';
import { SingYourSong } from './sing-your-song/sing-your-song';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        SingYourSong, 
        EightBall
    ],
    imports: [
        ServicesModule.forRoot(), 
        IonicModule
    ],
    exports: [SingYourSong, EightBall]
})
export class GamesModule {}

export {
    EightBall,
    SingYourSong
}