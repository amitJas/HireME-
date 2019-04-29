import { StationService } from './../station-service/station.service';
import { Component, OnInit } from '@angular/core';
//import { NavController , NavParams } from '@ionic/angular';
import { FirebaseService } from '../firebase-service/firebase-service.service';
import { HomePage } from '../home/home.page';
import { Router } from '@angular/router';




@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.page.html',
  styleUrls: ['./candidate.page.scss'],
})
export class CandidatePage implements OnInit {

  public department:any ;
  public candidateNum: string;
  public progress = 34;
  public candidateaStationList = ["ראיון אישי","מבחן פסיפס","הצעת שכר","חובקן טפסים","אישור משאבי אנוש","פתיחת מועמד במערכת"];
  public rouringArrPages = ["interview","psifas-test",'salary','forms','hr-approval','open-systems'];
  public currCandidat = {};
  
 

  constructor(public firebase: FirebaseService,public home: HomePage, public router:Router,public station:StationService) { 
  }

  ngOnInit() {
    this.firebase.getCandidateData().subscribe((data) => {
      data.docs.forEach(ref =>{
         this.currCandidat = ref.data()
         this.firebase.firebaseCID = ref.data().id
         })
       })
    
  }

  stationRouting(index,station){
    console.log(index,station);
    this.station.getSatationData(station)
    this.router.navigate([this.rouringArrPages[index]]);
  }


}
