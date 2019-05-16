import { PopdataPage } from '../popover/popdata/popdata.page';
import { StationService } from './../station-service/station.service';
import { Component, OnInit } from '@angular/core';
//import { NavController , NavParams } from '@ionic/angular';
import { FirebaseService } from '../firebase-service/firebase-service.service';
import { HomePage } from '../home/home.page';
import { Router } from '@angular/router';
import { LoadingController, AlertController,PopoverController  } from '@ionic/angular';





@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.page.html',
  styleUrls: ['./candidate.page.scss'],
})
export class CandidatePage implements OnInit {

  public department:any ;
  public candidateNum: string;
  public progress = 34;
  public candidateaStationList = [ {name: "ראיון אישי", progress: 0, stationNum: 5 },
                                   {name: "מבחן פסיפס" ,progress: 0,stationNum: 3},
                                   {name:"הצעת שכר", progress: 0,stationNum: 3} ,
                                   {name:"חובקן טפסים",progress: 0,stationNum: 3},
                                   {name:"פתיחת מועמד במערכת",progress: 0,stationNum: 3}
                                  ];
  public rouringArrPages = ["interview","psifas-test",'salary','forms','open-systems'];
  public currCandidat = {};
  public tempDate;
  
 

  constructor(private firebase: FirebaseService,public home: HomePage, 
              public router:Router,public station:StationService,public loadingCtrl: LoadingController, 
              public alertController: AlertController,private pop:PopoverController ) { 
  
  }

  ngOnInit() {
    //this.station.createHader()
    this.firebase.getCandidateData().subscribe((data) => {
      data.docs.forEach(ref =>{
         this.currCandidat = ref.data()
         this.candidateaStationList.forEach( (sta,i) => {
            sta.progress = this.firebase.calculatProgress(ref.data().stationProgres[i].progress,sta.stationNum)
         })
         this.firebase.firebaseCID = ref.data().id
         this.tempDate = new Date(ref.data().startdate).toLocaleDateString('he-IL')
         })
       })
       console.log(this.candidateaStationList)
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

  async presentPopover(ev: Event) {
    const popover = await this.pop.create({
      component: PopdataPage,
      componentProps: {
        candidate: this.currCandidat
      },
      event: ev,
      translucent: true,
    });
   
    return await popover.present();
  }
}













