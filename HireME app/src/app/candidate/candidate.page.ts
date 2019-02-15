import { Component, OnInit } from '@angular/core';
//import { NavController , NavParams } from '@ionic/angular';
import { FirebaseService } from '../firebase-service/firebase-service.service';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.page.html',
  styleUrls: ['./candidate.page.scss'],
})
export class CandidatePage implements OnInit {

  public department:any ;
  public candidateNum: string;
  public candidateaStationList = ["ראיון אישי","מבחן פסיפס","הצעת שכר","חובקן טפסים","אישור משאבי אנוש","פתיחת מועמד במערכת"];

  constructor(public firebase: FirebaseService,public home: HomePage) { 
    
  }

  ngOnInit() {
    this.department = this.firebase.currUserDepartment;
    this.candidateNum = "89076665";
    //console.log(this.department)
  }


  stationRouting(station){


  }
}
