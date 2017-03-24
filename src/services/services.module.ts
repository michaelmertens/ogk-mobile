import { MemberService } from './member-service';
import { RandomService } from './random-service';
import { NgModule } from '@angular/core';

@NgModule({})
export class ServicesModule {
    static forRoot(){
        return {
            ngModule: ServicesModule,
            providers: [MemberService, RandomService]
        }
    }
}

export {
    MemberService,
    RandomService
}