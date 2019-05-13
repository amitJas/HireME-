import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase-service/firebase-service.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  public currUser: any;
  public candidateName: any;
  public currStationName: any;
  public station: any;

  constructor(public nav: NavController,private firebase: FirebaseService) {
    //this.currUser = this.firebase.user;
    this.candidateName = this.firebase.firebaseCName
   }




  //  initData()
  // {
  //   //console.log('in initform' ,this.station.station.sendDate )
  //   if(this.station.station.sendDate){
  //     //this.fixdData = true;
  //     this.sendDate = this.station.station.sendDate;
  //   }
  //   if(this.station.station.returnDate){
  //     //this.fixdData = true;
  //     this.returnDate = this.station.station.returnDate;
  //   }
   
  // }

   getSatationData(stationName){
   console.log(stationName)
   this.currStationName = stationName
    let temp = this.firebase.getStation(stationName).subscribe((data) => {
      console.log(data.data())
      if(data)
        this.firebase.addStation(stationName)
        this.station = data.data()
    })
    return this.station
   }

  setFormSend(fildeName,val){
    console.log('setFile',this.currStationName,fildeName,val)
   }

   setFile(fildeName,date){
     let obj = {data: date , how: this.firebase.user}
     console.log('obj' , obj)
     this.firebase.setStationFile(this.currStationName,fildeName,obj)
   }

   navFunction(num){
     console.log("in navfunction")
    if(num == 1)
      this.nav.goBack();
    if(num == 2)
      this.nav.navigateForward('/home')
  }

  // createHader(){
  //   var temp = document.createElement("temp");
  //   var list = document.getElementById("header");
  //     temp.innerHTML = "<ion-toolbar mode='ios'> \
  //                         <ion-title> \
  //                           <ion-row> \
  //                             <ion-col>\
  //                               <ion-icon name='home' float-right (click)='station.navFunction(2)'></ion-icon> \
  //                             </ion-col> \
  //                             <ion-col> \
  //                               <ion-icon float-right name='arrow-round-forward' (click)='station.navFunction(1)'></ion-icon> \
  //                             </ion-col> \
  //                           </ion-row> \
  //                         </ion-title> \
  //                         </ion-toolbar>"
  //         list.appendChild(temp);
  // }

  setRdiuo(rdiuoName,data){
    this.firebase.setStationFile(this.currStationName,rdiuoName,data)
  }

  
}
