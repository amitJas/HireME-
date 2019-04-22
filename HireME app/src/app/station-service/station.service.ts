import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase-service/firebase-service.service';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  public currUser: any;
  public currCandidate: any;
  public currStation: any;
  public currStationData:any;

  constructor(private firebase: FirebaseService) {
   }





   getSatationData(){
    console.log(this.currStation)
    this.firebase.getStation(this.currStation).subscribe((snap) => {
      if(snap.empty)
        this.firebase.addStation(this.currStation)
      snap.docs.forEach(doc => {
        this.currStationData = doc.data()
      })
    })
   }

 

}
