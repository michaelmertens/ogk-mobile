import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Member } from "../../services/member-service";
import { MemberService } from "../../services/services.module";
import { RandomService } from "../../services/random-service";

@Component({
  selector: 'chinese-volunteer',
  templateUrl: 'chinese-volunteer.html'
})
export class ChineseVolunteer {
  members: ViewModel[];
  chosenMember: string = "..";

  constructor(
    public navCtrl: NavController, 
    private memberService: MemberService, 
    private randomService: RandomService) {
      this.members = memberService.getEveryone().map(m => {
        return {
          member: m,
          active: true
        }
      });
  }

  public go(): void {
    let m = this.randomService.getRandomItem(this.members.filter(m => m.active)).member;
    this.chosenMember = m.firstName + " " + m.lastName + ", Ik kies jou!";
  }
}

interface ViewModel {
  member: Member;
  active: boolean;
}