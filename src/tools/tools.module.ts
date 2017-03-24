import { ServicesModule } from '../services/services.module';
import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { ChineseVolunteer } from "./chinese-volunteer/chinese-volunteer";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        ChineseVolunteer
    ],
    imports: [
        ServicesModule.forRoot(), 
        CommonModule, 
        IonicModule
    ],
    exports: [ChineseVolunteer]
})
export class ToolsModule {}

export {
    ChineseVolunteer
}