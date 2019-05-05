import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase-service/firebase-service.service';
import { timeout } from 'q';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  public currUser: any;
  public currCandidate: any;
  public currStationName: any;
  public station: any;

  constructor(private firebase: FirebaseService) {
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
   setFile(fildeName,data){
     this.firebase.setStationFile(this.currStationName,fildeName,data)
   }

   //this.db.collection(this.department).doc('Station').collection(station,ref => ref.where('id','==',this.firebaseCID)).get()
  
   

}
