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





  //  getSatationData(stationName){
  //  console.log(stationName)
  //  this.currStationName = stationName
  //   let temp = this.firebase.getStation(stationName).subscribe((data) => {
  //     if(data.empty)
  //       this.firebase.addStation(stationName)
  //     data.docs.forEach(ref => {
  //       this.station = ref.data()
  //     })
  //   })
  //   return temp
  //  }

   getSatationData(stationName){
   console.log(stationName)
   this.currStationName = stationName
    let temp = this.firebase.getStation(stationName).subscribe((data) => {
      if(data.empty)
        this.firebase.addStation(stationName)
      data.docs.forEach(ref => {
        this.station = ref.data()
      })
    })
    return temp
   }


   setFormSend(fildeName,val){
    console.log('setFile',this.currStationName,fildeName,val)
     

   }


   //this.db.collection(this.department).doc('Station').collection(station,ref => ref.where('id','==',this.firebaseCID)).get()
  
   

}
