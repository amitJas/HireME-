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
  public rouringArrPages = ["interview","psifas-test"];
  public currCandidat = {};
 

  constructor(public firebase: FirebaseService,public home: HomePage, public router:Router) { 
    //console.log("444444444444444444444444444",this.firebase.currCandidate)
    // this.firebase.getCandidateData(this.firebase.currCandidate).subscribe((data) => {
    //  data.docs.forEach(ref =>{
    //     this.currCandidat = ref.data()
    //     })
    //   })
  }

  ngOnInit() {
    this.department = this.firebase.currUserDepartment;
    this.candidateNum = "89076665";
    this.firebase.getCandidateData(this.firebase.currCandidate).subscribe((data) => {
      data.docs.forEach(ref =>{
         this.currCandidat = ref.data()
         })
       })
    //console.log(this.department)
  }

  stationRouting(index){
    console.log(index);
    this.router.navigate([this.rouringArrPages[index]]);
  }


}
