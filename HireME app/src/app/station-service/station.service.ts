import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase-service/firebase-service.service';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  public currUser: any;
  public currCandidate: any;
  public currStation: any;

  constructor(private firebase: FirebaseService) {
    this.currCandidate = this.firebase.currCandidate
    console.log(this.currStation)
   }





   printBLA(){
    console.log(this.currStation)
   }
}
