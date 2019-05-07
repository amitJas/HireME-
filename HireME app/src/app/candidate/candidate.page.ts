import { StationService } from './../station-service/station.service';
import { Component, OnInit } from '@angular/core';
//import { NavController , NavParams } from '@ionic/angular';
import { FirebaseService } from '../firebase-service/firebase-service.service';
import { HomePage } from '../home/home.page';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';




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
 
  
 

  constructor(public firebase: FirebaseService,public home: HomePage, public router:Router,public station:StationService,public loadingCtrl: LoadingController, public alertController: AlertController) { 
  }

  ngOnInit() {
    this.firebase.getCandidateData().subscribe((data) => {
      data.docs.forEach(ref =>{
         this.currCandidat = ref.data()
         this.firebase.firebaseCID = ref.data().id
         })
       })
    
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'האם להסיר מועמד זה?',
      message: 'בהסרת מועמד זה כל הנתונים שנשמרו עד רגע זה ימחקו לצמיתות',
      cssClass: 'secondary',
      buttons: [
        {
          text: 'לא',
          role: 'cancel',
          handler: (blah) => {
            console.log('אל תמחק');
          }
        }, {
          text: 'כן',
          handler: () => {
            console.log('מחק אותי');
            this.presentAlertInput()
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertInput() {
    const alert = await this.alertController.create({
      header: 'אנא כתוב את סיבת סגירת המועמד',
      inputs: [
        {
          name: 'cause',
          type: 'text',
        },
      ],
      buttons: [
        {
          text: 'שמור',
          role: 'save',
          cssClass: 'secondary',
          handler: (data) => {
            console.log('שמור סיבה',data.cause);
            this.firebase.deletCandidate(data.cause)
          }
        }
      ]
    });

    await alert.present();
  }


  stationRouting(index,station){
    console.log(index,station);
    this.station.getSatationData(station)
    this.router.navigate([this.rouringArrPages[index]]);
  }

  closeCandidate(){
    let alert = this.presentAlertConfirm().then(() => {
      this.router.navigate(['home']);
    })
  }
}
