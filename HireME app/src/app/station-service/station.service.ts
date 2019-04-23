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
  //public stationName: any;
  public station: any;

  constructor(private firebase: FirebaseService) {
   }





   getSatationData(stationName){
   console.log(stationName)
    let temp = this.firebase.getStation(stationName).subscribe((data) => {
      if(data.empty)
        this.firebase.addStation(stationName)
      data.docs.forEach(ref => {
        this.station = ref.data()
      })
    })
    return temp
   }

   

}
